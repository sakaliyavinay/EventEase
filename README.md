# EventEase - Online Event Booking System 🎟️

![ASP.NET MVC](https://img.shields.io/badge/Framework-ASP.NET%20MVC-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![Language](https://img.shields.io/badge/Language-C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Build](https://img.shields.io/badge/Build-Passing%20(0%20Errors)-10B981?style=for-the-badge)
![Currency](https://img.shields.io/badge/Currency-INR%20(%E2%82%B9)-F59E0B?style=for-the-badge)

A complete **ASP.NET MVC Mini Project** for an online event discovery, reservation, and ticketing management platform. Built with C#, ASP.NET Core MVC, Bootstrap 5, and Session-based User Authentication.

---

## 🌟 Key Features

- 📄 **6 Core Web Pages:**
  - **Home (`/`):** Hero section, platform metrics, featured event cards.
  - **Events Catalog (`/Home/Events`):** Interactive category filters (*Tech, Music, Workshop, Sports, Art*) & keyword search.
  - **Services (`/Home/Services`):** Showcases 6 core ticketing & venue management services.
  - **About Us (`/Home/About`):** Company mission, pillars of security, customer testimonials.
  - **Ticket Booking (`/Home/Booking`):** Interactive reservation form, pass tier selection (*Standard* vs *VIP*), and instant QR ticket pass generation.
  - **Contact Us (`/Home/Contact`):** Support form with input validation, office address, hotline, and FAQs.
- 👤 **Session-Based User Management:**
  - Account Sign Up (`/Account/Register`) with email uniqueness and password matching validation.
  - User Login (`/Account/Login`) with persistent session state.
  - **My Profile Dashboard (`/Account/Profile`):** Automatically saves and lists all active tickets booked under the user's account.
- 🇮🇳 **Native Rupee Pricing (`₹`):** All event rates, base prices, and order totals calculated in Indian Rupees.
- 🎨 **Responsive UI & Sticky Layout:** Built using Bootstrap 5 with responsive navbar, sticky header, and flexbox footer alignment.

---

## 🛠️ Technology Stack

- **Framework:** ASP.NET Core / MVC (.NET 10 / C# 12)
- **Frontend UI:** HTML5, Razor Views (`.cshtml`), Bootstrap 5, Bootstrap Icons, Custom Site CSS
- **State Management:** ASP.NET Session State
- **Build System:** .NET CLI (`dotnet build`, `dotnet run`)
- **Version Control:** Git & GitHub

---

## 🔑 Demo Account Credentials

You can test user authentication and account pass management immediately with the pre-configured demo user:

- **Email:** `user@eventease.com`
- **Password:** `Password123`

*(Or create a new account via the **Sign Up** page!)*

---

## 🚀 Quick Start Guide

### Prerequisites
- [.NET SDK 8.0 / 10.0](https://dotnet.microsoft.com/download) installed on your machine.
- Visual Studio 2022 or VS Code.

### Running Locally via Terminal

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/EventEase.git
   cd EventEase
   ```

2. **Build the project:**
   ```bash
   dotnet build
   ```

3. **Run the application:**
   ```bash
   dotnet run
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5000` or `https://localhost:5001`.

---

## 📁 Project Directory Structure

```
d:\MY HOSTING\ASP NET TINY PROJECT
├── Controllers/
│   ├── HomeController.cs        # Home, Events, Services, About, Booking, Contact actions
│   └── AccountController.cs     # Login, Register, Profile, Logout actions
├── Models/
│   ├── EventItem.cs             # Event catalog data model
│   ├── BookingViewModel.cs      # Ticket reservation form model
│   ├── ContactFormModel.cs      # Contact inquiry form model
│   ├── UserModel.cs             # User account data model
│   ├── BookedTicketModel.cs     # Stored user ticket pass model
│   └── BookingsRepository.cs    # In-memory ticket storage repository
├── Views/
│   ├── Home/                    # Razor views for all 6 main pages
│   ├── Account/                 # Login, Register, & Profile views
│   └── Shared/                  # Global _Layout.cshtml & navigation header/footer
├── wwwroot/
│   ├── css/site.css             # Custom CSS styles
│   └── lib/bootstrap/           # Bootstrap 5 framework assets
├── EventEase.csproj             # .NET project configuration
└── README.md                    # Project documentation
```

---

## 📄 Submission Checklist

- [x] ASP.NET MVC Mini Project Architecture
- [x] Approximately 5–6 functional pages with navigation
- [x] Meaningful Project Title (*EventEase*)
- [x] Connected Local Git repository with clean commits
- [x] Build verified with 0 Warnings and 0 Errors

---

## 📜 License

This mini-project is created for educational assessment purposes.
