using EventEase.Models;
using Microsoft.AspNetCore.Mvc;

namespace EventEase.Controllers
{
    public class AccountController : Controller
    {
        // In-memory static store for demonstration
        private static readonly List<UserModel> UsersStore = new List<UserModel>
        {
            new UserModel
            {
                Id = 1,
                FullName = "Alex Johnson",
                Email = "user@eventease.com",
                Password = "Password123",
                Phone = "+1 (555) 019-2834",
                Role = "VIP Member",
                JoinedDate = DateTime.Now.AddMonths(-3)
            }
        };

        [HttpGet]
        public IActionResult Login(string? returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View(new LoginViewModel());
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel model, string? returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;

            if (ModelState.IsValid)
            {
                var user = UsersStore.FirstOrDefault(u => u.Email.Equals(model.Email, StringComparison.OrdinalIgnoreCase) 
                                                          && u.Password == model.Password);

                if (user != null)
                {
                    // Save user session
                    HttpContext.Session.SetString("UserEmail", user.Email);
                    HttpContext.Session.SetString("UserName", user.FullName);
                    HttpContext.Session.SetString("UserRole", user.Role);

                    if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl))
                    {
                        return Redirect(returnUrl);
                    }
                    return RedirectToAction("Profile");
                }

                ModelState.AddModelError(string.Empty, "Invalid email or password. (Demo user: user@eventease.com / Password123)");
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View(new RegisterViewModel());
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (UsersStore.Any(u => u.Email.Equals(model.Email, StringComparison.OrdinalIgnoreCase)))
                {
                    ModelState.AddModelError("Email", "An account with this email address already exists.");
                    return View(model);
                }

                var newUser = new UserModel
                {
                    Id = UsersStore.Count + 1,
                    FullName = model.FullName,
                    Email = model.Email,
                    Password = model.Password,
                    Phone = model.Phone,
                    Role = "Member",
                    JoinedDate = DateTime.Now
                };

                UsersStore.Add(newUser);

                // Auto-login new user
                HttpContext.Session.SetString("UserEmail", newUser.Email);
                HttpContext.Session.SetString("UserName", newUser.FullName);
                HttpContext.Session.SetString("UserRole", newUser.Role);

                TempData["SuccessMessage"] = "Account created successfully! Welcome to EventEase.";
                return RedirectToAction("Profile");
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult Profile()
        {
            var userEmail = HttpContext.Session.GetString("UserEmail");
            if (string.IsNullOrEmpty(userEmail))
            {
                return RedirectToAction("Login", new { returnUrl = Url.Action("Profile") });
            }

            var user = UsersStore.FirstOrDefault(u => u.Email.Equals(userEmail, StringComparison.OrdinalIgnoreCase));
            if (user == null)
            {
                return RedirectToAction("Logout");
            }

            return View(user);
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            TempData["SuccessMessage"] = "You have been logged out safely.";
            return RedirectToAction("Index", "Home");
        }
    }
}
