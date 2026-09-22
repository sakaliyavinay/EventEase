using System.Diagnostics;
using EventEase.Models;
using Microsoft.AspNetCore.Mvc;

namespace EventEase.Controllers
{
    public class HomeController : Controller
    {
        public static readonly List<EventItem> EventsList = new List<EventItem>
        {
            new EventItem { Id = 1, Title = "Global Tech Summit 2026", Category = "Tech", Date = "Oct 15, 2026", Time = "09:00 AM", Location = "Silicon Convention Center", Price = 11999m, ImageUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop", Description = "Join key industry leaders, innovators, and developers for keynote talks and tech workshops.", SeatsAvailable = 120, Organizer = "TechGlobal Inc.", IsFeatured = true },
            new EventItem { Id = 2, Title = "Symphony Under The Stars", Category = "Music", Date = "Oct 20, 2026", Time = "07:30 PM", Location = "Grand Amphitheater Park", Price = 4999m, ImageUrl = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop", Description = "A magical outdoor evening performance by the National Philharmonic Orchestra.", SeatsAvailable = 85, Organizer = "Aura Music Productions", IsFeatured = true },
            new EventItem { Id = 3, Title = "International Food & Wine Expo", Category = "Workshop", Date = "Nov 02, 2026", Time = "11:00 AM", Location = "Metropolitan Exhibition Hall", Price = 2499m, ImageUrl = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop", Description = "Taste world-class cuisines, wine pairing sessions, and live masterclasses from celebrity chefs.", SeatsAvailable = 200, Organizer = "Culinary Arts Guild", IsFeatured = true },
            new EventItem { Id = 4, Title = "Marathon Championship 2026", Category = "Sports", Date = "Nov 12, 2026", Time = "06:00 AM", Location = "City Coastal Drive", Price = 1499m, ImageUrl = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop", Description = "Annual city runner marathon. Includes runner kit, medal, and hydration stations.", SeatsAvailable = 450, Organizer = "City Athletic Club", IsFeatured = false },
            new EventItem { Id = 5, Title = "Modern Art & Design Gala", Category = "Art", Date = "Nov 18, 2026", Time = "05:00 PM", Location = "Contemporary Art Museum", Price = 3999m, ImageUrl = "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&auto=format&fit=crop", Description = "Exclusive showcase of contemporary paintings, digital installations, and sculpture galleries.", SeatsAvailable = 60, Organizer = "Modern Art Alliance", IsFeatured = false },
            new EventItem { Id = 6, Title = "AI & Future Robotics Workshop", Category = "Tech", Date = "Dec 05, 2026", Time = "10:00 AM", Location = "Innovation Hub Lab 4", Price = 8999m, ImageUrl = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop", Description = "Hands-on practical session building autonomous robotics and neural networks.", SeatsAvailable = 40, Organizer = "RoboCorp Labs", IsFeatured = true }
        };

        public IActionResult Index()
        {
            var featuredEvents = EventsList.Where(e => e.IsFeatured).ToList();
            ViewData["Title"] = "Home - EventEase";
            return View(featuredEvents);
        }

        public IActionResult Events(string? category, string? search)
        {
            ViewData["Title"] = "Browse Events - EventEase";
            var query = EventsList.AsQueryable();

            if (!string.IsNullOrEmpty(category) && category != "All")
            {
                query = query.Where(e => e.Category.Equals(category, StringComparison.OrdinalIgnoreCase));
            }

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(e => e.Title.Contains(search, StringComparison.OrdinalIgnoreCase) || 
                                         e.Description.Contains(search, StringComparison.OrdinalIgnoreCase) ||
                                         e.Location.Contains(search, StringComparison.OrdinalIgnoreCase));
            }

            ViewData["SelectedCategory"] = category ?? "All";
            ViewData["SearchQuery"] = search ?? "";

            return View(query.ToList());
        }

        public IActionResult Services()
        {
            ViewData["Title"] = "Our Services - EventEase";
            return View();
        }

        public IActionResult About()
        {
            ViewData["Title"] = "About Us - EventEase";
            return View();
        }

        [HttpGet]
        public IActionResult Booking(int? id)
        {
            ViewData["Title"] = "Book Event Ticket - EventEase";
            
            var selectedEvent = EventsList.FirstOrDefault(e => e.Id == id) ?? EventsList.First();

            var userEmail = HttpContext.Session.GetString("UserEmail") ?? "";
            var userName = HttpContext.Session.GetString("UserName") ?? "";

            var model = new BookingViewModel
            {
                EventId = selectedEvent.Id,
                EventTitle = selectedEvent.Title,
                CustomerName = userName,
                CustomerEmail = userEmail,
                TicketPrice = selectedEvent.Price,
                Quantity = 1,
                TotalAmount = selectedEvent.Price,
                TicketType = "Standard",
                IsSubmitted = false
            };

            ViewBag.Event = selectedEvent;
            ViewBag.AllEvents = EventsList;

            return View(model);
        }

        [HttpPost]
        public IActionResult Booking(BookingViewModel model)
        {
            ViewData["Title"] = "Book Event Ticket - EventEase";
            var selectedEvent = EventsList.FirstOrDefault(e => e.Id == model.EventId) ?? EventsList.First();
            ViewBag.Event = selectedEvent;
            ViewBag.AllEvents = EventsList;

            if (ModelState.IsValid)
            {
                decimal multiplier = model.TicketType == "VIP Pass" ? 1.5m : 1.0m;
                model.TicketPrice = selectedEvent.Price * multiplier;
                model.TotalAmount = model.TicketPrice * model.Quantity;
                model.IsSubmitted = true;
                model.EventTitle = selectedEvent.Title;
                model.BookingReference = "EE-" + Guid.NewGuid().ToString().Substring(0, 8).ToUpper();

                // Store booking in repository so it appears in the User Account Profile!
                var bookedTicket = new BookedTicketModel
                {
                    BookingReference = model.BookingReference,
                    EventId = selectedEvent.Id,
                    EventTitle = selectedEvent.Title,
                    CustomerName = model.CustomerName,
                    CustomerEmail = model.CustomerEmail,
                    CustomerPhone = model.CustomerPhone,
                    TicketType = model.TicketType,
                    Quantity = model.Quantity,
                    TotalAmount = model.TotalAmount,
                    BookingDate = DateTime.Now,
                    EventDate = selectedEvent.Date,
                    EventLocation = selectedEvent.Location
                };

                BookingsRepository.AddBooking(bookedTicket);

                ViewBag.SuccessMessage = $"Booking Confirmed! Reference ID: {model.BookingReference}";
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult Contact()
        {
            ViewData["Title"] = "Contact Us - EventEase";
            return View(new ContactFormModel());
        }

        [HttpPost]
        public IActionResult Contact(ContactFormModel model)
        {
            ViewData["Title"] = "Contact Us - EventEase";
            if (ModelState.IsValid)
            {
                model.IsSubmitted = true;
                ViewBag.SuccessMessage = "Thank you for reaching out! Your message has been received and our team will get back to you within 24 hours.";
            }

            return View(model);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
