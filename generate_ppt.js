const pptxgen = require('pptxgenjs');
const path = require('path');

const pptx = new pptxgen();

// Standard 16:9 Widescreen dimensions: 13.33 x 7.5 inches
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'EventEase Mini Project Presentation';
pptx.author = 'Student';

const NAVY = '0F172A';
const SLATE = '1E293B';
const BLUE = '3B82F6';
const LIGHT_BLUE = '60A5FA';
const WHITE = 'FFFFFF';
const GREEN = '10B981';
const AMBER = 'F59E0B';
const PURPLE = '8B5CF6';

function addHeader(slide, titleText) {
    // Add title
    slide.addText(titleText, {
        x: 0.8,
        y: 0.4,
        w: 11.7,
        h: 0.8,
        fontSize: 26,
        bold: true,
        color: LIGHT_BLUE,
        fontFace: 'Segoe UI'
    });
    // Add full widescreen divider line
    slide.addShape(pptx.shapes.LINE, {
        x: 0.8,
        y: 1.25,
        w: 11.73,
        h: 0,
        line: { color: '334155', width: 2 }
    });
}

// -------------------------------------------------------------
// SLIDE 1: Title Slide
// -------------------------------------------------------------
let slide1 = pptx.addSlide();
slide1.background = { color: NAVY };

slide1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 4.8, y: 0.8, w: 3.7, h: 0.5,
    fill: { color: '1E40AF' }, line: { color: BLUE, width: 1 }
});
slide1.addText('ASP.NET MVC MINI PROJECT', {
    x: 4.8, y: 0.8, w: 3.7, h: 0.5,
    fontSize: 14, bold: true, color: WHITE, align: 'center', fontFace: 'Segoe UI'
});

slide1.addText('EventEase', {
    x: 1.0, y: 1.6, w: 11.33, h: 1.2,
    fontSize: 56, bold: true, color: WHITE, align: 'center', fontFace: 'Segoe UI'
});

slide1.addText('Online Event Booking & Ticketing System', {
    x: 1.0, y: 2.8, w: 11.33, h: 0.6,
    fontSize: 24, bold: true, color: LIGHT_BLUE, align: 'center', fontFace: 'Segoe UI'
});

slide1.addText('Built with ASP.NET MVC, C#, Bootstrap 5 & User Management', {
    x: 1.0, y: 3.5, w: 11.33, h: 0.5,
    fontSize: 16, color: '94A3B8', align: 'center', fontFace: 'Segoe UI'
});

// Card 1
slide1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 1.2, y: 4.5, w: 5.2, h: 2.2,
    fill: { color: SLATE }, line: { color: BLUE, width: 2 }
});
slide1.addText([
    { text: 'Project Name: ', options: { bold: true, color: WHITE } },
    { text: 'EventEase\n', options: { color: LIGHT_BLUE } },
    { text: 'Technology: ', options: { bold: true, color: WHITE } },
    { text: 'ASP.NET MVC (C#)\n', options: { color: LIGHT_BLUE } },
    { text: 'Currency: ', options: { bold: true, color: WHITE } },
    { text: 'Indian Rupees (₹)', options: { color: GREEN } }
], { x: 1.4, y: 4.7, w: 4.8, h: 1.8, fontSize: 15, fontFace: 'Segoe UI' });

// Card 2
slide1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.9, y: 4.5, w: 5.2, h: 2.2,
    fill: { color: SLATE }, line: { color: GREEN, width: 2 }
});
slide1.addText([
    { text: 'Repository: ', options: { bold: true, color: WHITE } },
    { text: 'Git & GitHub Ready\n', options: { color: LIGHT_BLUE } },
    { text: 'Page Count: ', options: { bold: true, color: WHITE } },
    { text: '6 Key Pages + User Auth\n', options: { color: LIGHT_BLUE } },
    { text: 'Build Status: ', options: { bold: true, color: WHITE } },
    { text: '0 Errors (Clean Build)', options: { color: GREEN } }
], { x: 7.1, y: 4.7, w: 4.8, h: 1.8, fontSize: 15, fontFace: 'Segoe UI' });


// -------------------------------------------------------------
// SLIDE 2: Executive Summary & Problem/Solution
// -------------------------------------------------------------
let slide2 = pptx.addSlide();
slide2.background = { color: NAVY };
addHeader(slide2, 'Executive Summary & Motivation');

// Problem Box
slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.5, w: 5.6, h: 5.3,
    fill: { color: SLATE }, line: { color: 'EF4444', width: 2 }
});
slide2.addText('The Problem Statement', {
    x: 1.1, y: 1.7, w: 5.0, h: 0.5,
    fontSize: 20, bold: true, color: 'EF4444', fontFace: 'Segoe UI'
});
slide2.addText([
    { text: '• Long Physical Queues: ', options: { bold: true, color: WHITE } },
    { text: 'Traditional ticket counters suffer from long waiting times and physical bottlenecks.\n\n', options: { color: 'CBD5E1' } },
    { text: '• Fragmented Event Discovery: ', options: { bold: true, color: WHITE } },
    { text: 'Attendees lack a single portal to explore concerts, summits, and workshops.\n\n', options: { color: 'CBD5E1' } },
    { text: '• Ticket Misplacement: ', options: { bold: true, color: WHITE } },
    { text: 'Paper tickets get lost easily without digital account backups.', options: { color: 'CBD5E1' } }
], { x: 1.1, y: 2.3, w: 5.0, h: 4.3, fontSize: 14, fontFace: 'Segoe UI' });

// Solution Box
slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.5, w: 5.6, h: 5.3,
    fill: { color: SLATE }, line: { color: GREEN, width: 2 }
});
slide2.addText('The EventEase Solution', {
    x: 7.1, y: 1.7, w: 5.0, h: 0.5,
    fontSize: 20, bold: true, color: GREEN, fontFace: 'Segoe UI'
});
slide2.addText([
    { text: '• Instant 24/7 Booking: ', options: { bold: true, color: WHITE } },
    { text: 'Centralized Web Application allowing ticket reservation from anywhere.\n\n', options: { color: 'CBD5E1' } },
    { text: '• Automatic Rupee Pricing: ', options: { bold: true, color: WHITE } },
    { text: 'Instant price calculations natively in Indian Rupees (₹).\n\n', options: { color: 'CBD5E1' } },
    { text: '• Digital Account Passes: ', options: { bold: true, color: WHITE } },
    { text: 'All booked passes are saved directly to the user\'s Profile Dashboard.', options: { color: 'CBD5E1' } }
], { x: 7.1, y: 2.3, w: 5.0, h: 4.3, fontSize: 14, fontFace: 'Segoe UI' });


// -------------------------------------------------------------
// SLIDE 3: Key Features Grid
// -------------------------------------------------------------
let slide3 = pptx.addSlide();
slide3.background = { color: NAVY };
addHeader(slide3, 'Key Features & Capabilities');

const features = [
    { title: '6 Functional Pages', desc: 'Home, Events Catalog, Services, About Us, Ticket Booking, and Contact Us.', color: BLUE },
    { title: 'Category Filters', desc: 'Filter events by Tech, Music, Workshop, Sports, & Art with real-time keyword search.', color: GREEN },
    { title: 'Pass Tier Multipliers', desc: 'Select Standard or VIP Passes (+50% VIP lounge access calculation).', color: AMBER },
    { title: 'Indian Rupee Pricing', desc: 'All rates, base prices, and order totals calculated in Indian Rupees (₹).', color: LIGHT_BLUE },
    { title: 'User Management', desc: 'Full Sign Up, Login, and Session-based authentication state handling.', color: PURPLE },
    { title: 'My Profile Passes', desc: 'Booked tickets automatically link and appear under the user\'s account portal.', color: 'EC4899' }
];

features.forEach((feat, idx) => {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    let x = 0.8 + col * 4.0;
    let y = 1.5 + row * 2.7;

    slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: x, y: y, w: 3.7, h: 2.4,
        fill: { color: SLATE }, line: { color: feat.color, width: 2 }
    });
    slide3.addText(feat.title, {
        x: x + 0.2, y: y + 0.2, w: 3.3, h: 0.4,
        fontSize: 18, bold: true, color: feat.color, fontFace: 'Segoe UI'
    });
    slide3.addText(feat.desc, {
        x: x + 0.2, y: y + 0.7, w: 3.3, h: 1.5,
        fontSize: 13, color: 'CBD5E1', fontFace: 'Segoe UI'
    });
});


// -------------------------------------------------------------
// SLIDE 4: System Architecture
// -------------------------------------------------------------
let slide4 = pptx.addSlide();
slide4.background = { color: NAVY };
addHeader(slide4, 'System Architecture & Technology Stack');

// Diagram Boxes
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.6, w: 3.5, h: 2.0,
    fill: { color: SLATE }, line: { color: BLUE, width: 2 }
});
slide4.addText('VIEW LAYER\n\nRazor Views (.cshtml)\nBootstrap 5 & Custom CSS\nResponsive HTML5 Layout', {
    x: 0.9, y: 1.8, w: 3.3, h: 1.6,
    fontSize: 14, bold: true, color: WHITE, align: 'center', fontFace: 'Segoe UI'
});

slide4.addText('➔', { x: 4.5, y: 2.3, w: 0.6, h: 0.6, fontSize: 28, color: LIGHT_BLUE, align: 'center' });

slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.6, w: 3.5, h: 2.0,
    fill: { color: SLATE }, line: { color: GREEN, width: 2 }
});
slide4.addText('CONTROLLER LAYER\n\nHomeController.cs\nAccountController.cs\nSession State Manager', {
    x: 5.4, y: 1.8, w: 3.3, h: 1.6,
    fontSize: 14, bold: true, color: WHITE, align: 'center', fontFace: 'Segoe UI'
});

slide4.addText('➔', { x: 9.0, y: 2.3, w: 0.6, h: 0.6, fontSize: 28, color: LIGHT_BLUE, align: 'center' });

slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 9.7, y: 1.6, w: 2.8, h: 2.0,
    fill: { color: SLATE }, line: { color: AMBER, width: 2 }
});
slide4.addText('MODEL LAYER\n\nEventItem Model\nBookedTicketModel\nBookingsRepository', {
    x: 9.8, y: 1.8, w: 2.6, h: 1.6,
    fontSize: 14, bold: true, color: WHITE, align: 'center', fontFace: 'Segoe UI'
});

// Tech Stack Summary
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 4.0, w: 11.73, h: 2.8,
    fill: { color: SLATE }, line: { color: LIGHT_BLUE, width: 1 }
});
slide4.addText('Core Technologies Used:', {
    x: 1.1, y: 4.2, w: 11.0, h: 0.4,
    fontSize: 18, bold: true, color: LIGHT_BLUE, fontFace: 'Segoe UI'
});
slide4.addText('• Framework: ASP.NET MVC (.NET 10 / C# 12)\n• UI Styling: Bootstrap 5, Bootstrap Icons, Custom Site CSS\n• Authentication: ASP.NET Core Session Management\n• Version Control: Git & GitHub Repository', {
    x: 1.1, y: 4.7, w: 11.0, h: 1.9,
    fontSize: 15, color: 'CBD5E1', fontFace: 'Segoe UI'
});


// -------------------------------------------------------------
// SLIDE 5: Page Structure Table
// -------------------------------------------------------------
let slide5 = pptx.addSlide();
slide5.background = { color: NAVY };
addHeader(slide5, 'Website Pages & Navigation Breakdown');

const rows = [
    [{ text: 'Page Name', options: { bold: true, color: WHITE, fill: { color: BLUE } } },
     { text: 'Controller Route', options: { bold: true, color: WHITE, fill: { color: BLUE } } },
     { text: 'Key Functionality', options: { bold: true, color: WHITE, fill: { color: BLUE } } }],
    
    ['1. Home Page', '/Home/Index', 'Hero banner, featured events in ₹, platform statistics.'],
    ['2. Events Catalog', '/Home/Events', 'Filterable event grid (Tech, Music, etc.) and search bar.'],
    ['3. Services Page', '/Home/Services', 'Showcases 6 core services (Online Ticketing, VIP Passes, etc.).'],
    ['4. About Us Page', '/Home/About', 'Company story, security guarantees, and platform metrics.'],
    ['5. Ticket Booking', '/Home/Booking', 'Interactive ticket form, pass selection, QR pass summary.'],
    ['6. Contact Us Page', '/Home/Contact', 'Inquiry submission form with validation and FAQs.'],
    ['7. User Management', '/Account/Login & Register', 'User Sign Up, Login, and Profile Dashboard.']
];

slide5.addTable(rows, {
    x: 0.8, y: 1.5, w: 11.73, colW: [2.5, 3.2, 6.03],
    fontSize: 13, color: 'CBD5E1', fontFace: 'Segoe UI',
    border: { pt: 1, color: '334155' }
});


// -------------------------------------------------------------
// SLIDE 6: Pricing & Calculation Workflow
// -------------------------------------------------------------
let slide6 = pptx.addSlide();
slide6.background = { color: NAVY };
addHeader(slide6, 'Ticket Booking & Rupee Calculation Workflow');

// Formula Box
slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.5, w: 11.73, h: 1.5,
    fill: { color: SLATE }, line: { color: AMBER, width: 2 }
});
slide6.addText('Price Calculation Formula:', {
    x: 1.1, y: 1.7, w: 11.0, h: 0.4,
    fontSize: 18, bold: true, color: AMBER, fontFace: 'Segoe UI'
});
slide6.addText('Total Amount (₹) = (Base Event Price × Tier Multiplier) × Ticket Quantity', {
    x: 1.1, y: 2.2, w: 11.0, h: 0.5,
    fontSize: 20, bold: true, color: WHITE, fontFace: 'Segoe UI'
});

// Step 1 & 2
slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.3, w: 5.6, h: 3.5,
    fill: { color: SLATE }, line: { color: BLUE, width: 2 }
});
slide6.addText('Step 1: Input Validation', {
    x: 1.1, y: 3.6, w: 5.0, h: 0.4,
    fontSize: 18, bold: true, color: BLUE, fontFace: 'Segoe UI'
});
slide6.addText('• Validates Name, Email, Phone Number.\n• Restricts ticket quantity between 1 and 10.\n• Multiplies price by 1.5x if VIP Pass tier is selected.', {
    x: 1.1, y: 4.2, w: 5.0, h: 2.3,
    fontSize: 14, color: 'CBD5E1', fontFace: 'Segoe UI'
});

slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 3.3, w: 5.6, h: 3.5,
    fill: { color: SLATE }, line: { color: GREEN, width: 2 }
});
slide6.addText('Step 2: Order Saving & Reference', {
    x: 7.1, y: 3.6, w: 5.0, h: 0.4,
    fontSize: 18, bold: true, color: GREEN, fontFace: 'Segoe UI'
});
slide6.addText('• Generates unique Booking Ref (e.g. EE-8A92B104).\n• Saves ticket details to BookingsRepository.\n• Displays instant QR code ticket pass summary.', {
    x: 7.1, y: 4.2, w: 5.0, h: 2.3,
    fontSize: 14, color: 'CBD5E1', fontFace: 'Segoe UI'
});


// -------------------------------------------------------------
// SLIDE 7: User Management System
// -------------------------------------------------------------
let slide7 = pptx.addSlide();
slide7.background = { color: NAVY };
addHeader(slide7, 'User Management & Account System');

const authCards = [
    { title: 'User Sign Up', route: '/Account/Register', desc: 'Allows new attendees to create accounts with validation for email uniqueness and password matching.', color: BLUE },
    { title: 'User Login & Session', route: '/Account/Login', desc: 'Authenticates credentials and sets session variables (UserEmail, UserName) for persistent browsing.', color: GREEN },
    { title: 'My Profile Dashboard', route: '/Account/Profile', desc: 'Displays member badge, user details, and all booked tickets dynamically linked to the user account.', color: AMBER }
];

authCards.forEach((card, idx) => {
    let x = 0.8 + idx * 4.0;
    slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: x, y: 1.5, w: 3.7, h: 5.3,
        fill: { color: SLATE }, line: { color: card.color, width: 2 }
    });
    slide7.addText(card.title, {
        x: x + 0.2, y: 1.8, w: 3.3, h: 0.5,
        fontSize: 20, bold: true, color: card.color, fontFace: 'Segoe UI'
    });
    slide7.addText(card.route, {
        x: x + 0.2, y: 2.3, w: 3.3, h: 0.4,
        fontSize: 13, bold: true, color: LIGHT_BLUE, fontFace: 'Consolas'
    });
    slide7.addText(card.desc, {
        x: x + 0.2, y: 2.9, w: 3.3, h: 3.5,
        fontSize: 14, color: 'CBD5E1', fontFace: 'Segoe UI'
    });
});


// -------------------------------------------------------------
// SLIDE 8: Testing & Build Verification
// -------------------------------------------------------------
let slide8 = pptx.addSlide();
slide8.background = { color: NAVY };
addHeader(slide8, 'Testing, Build Verification & Git Setup');

// Build Box
slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.5, w: 5.6, h: 5.3,
    fill: { color: SLATE }, line: { color: GREEN, width: 2 }
});
slide8.addText('Build Verification Status', {
    x: 1.1, y: 1.8, w: 5.0, h: 0.4,
    fontSize: 20, bold: true, color: GREEN, fontFace: 'Segoe UI'
});
slide8.addText('Executed dotnet build command:\n\nBuild succeeded.\n    0 Warning(s)\n    0 Error(s)\n\n• Zero compilation errors.\n• Form validation verified across all controllers.', {
    x: 1.1, y: 2.4, w: 5.0, h: 4.1,
    fontSize: 15, color: 'CBD5E1', fontFace: 'Segoe UI'
});

// Git Box
slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.5, w: 5.6, h: 5.3,
    fill: { color: SLATE }, line: { color: LIGHT_BLUE, width: 2 }
});
slide8.addText('Git Repository Integration', {
    x: 7.1, y: 1.8, w: 5.0, h: 0.4,
    fontSize: 20, bold: true, color: LIGHT_BLUE, fontFace: 'Segoe UI'
});
slide8.addText('Local Git initialized with .gitignore:\n\n• Commit 1: Initial EventEase project code\n• Commit 2: Layout CSS positioning fixes\n• Commit 3: User Management & Rupee format\n• Commit 4: Presentation deck integration', {
    x: 7.1, y: 2.4, w: 5.0, h: 4.1,
    fontSize: 15, color: 'CBD5E1', fontFace: 'Segoe UI'
});


// -------------------------------------------------------------
// SLIDE 9: Future Scope
// -------------------------------------------------------------
let slide9 = pptx.addSlide();
slide9.background = { color: NAVY };
addHeader(slide9, 'Future Enhancements & Scope');

const scopeItems = [
    { title: 'Payment Gateway Integration', desc: 'Integration with Razorpay / UPI / Stripe for live online payment processing.', color: BLUE },
    { title: 'Database Persistence (SQL Server)', desc: 'Connecting Entity Framework Core with SQL Server for database persistence.', color: GREEN },
    { title: 'Automated PDF Email Passes', desc: 'Sending automated PDF ticket attachments to users via SMTP email.', color: AMBER }
];

scopeItems.forEach((item, idx) => {
    let x = 0.8 + idx * 4.0;
    slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: x, y: 1.5, w: 3.7, h: 5.3,
        fill: { color: SLATE }, line: { color: item.color, width: 2 }
    });
    slide9.addText(item.title, {
        x: x + 0.2, y: 1.9, w: 3.3, h: 0.8,
        fontSize: 18, bold: true, color: item.color, fontFace: 'Segoe UI'
    });
    slide9.addText(item.desc, {
        x: x + 0.2, y: 2.9, w: 3.3, h: 3.5,
        fontSize: 14, color: 'CBD5E1', fontFace: 'Segoe UI'
    });
});


// -------------------------------------------------------------
// SLIDE 10: Conclusion
// -------------------------------------------------------------
let slide10 = pptx.addSlide();
slide10.background = { color: NAVY };

slide10.addText('Thank You!', {
    x: 1.0, y: 1.5, w: 11.33, h: 1.2,
    fontSize: 56, bold: true, color: WHITE, align: 'center', fontFace: 'Segoe UI'
});

slide10.addText('EventEase - Online Event Booking System', {
    x: 1.0, y: 2.7, w: 11.33, h: 0.6,
    fontSize: 24, bold: true, color: LIGHT_BLUE, align: 'center', fontFace: 'Segoe UI'
});

slide10.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 2.5, y: 3.6, w: 8.33, h: 2.8,
    fill: { color: SLATE }, line: { color: GREEN, width: 2 }
});
slide10.addText('Project Summary Highlights:\n• 6 Functional Pages in ASP.NET MVC\n• Complete User Management System (Login / Sign Up)\n• Native Indian Rupee (₹) Price Calculation\n• Clean Build & Git Repository Ready for Submission', {
    x: 2.8, y: 3.8, w: 7.73, h: 2.4,
    fontSize: 16, color: WHITE, fontFace: 'Segoe UI'
});

// Save presentation
const outputPath = path.join(__dirname, 'EventEase_Presentation.pptx');
pptx.writeFile({ fileName: outputPath }).then(fileName => {
    console.log(`PPTX created successfully at: ${fileName}`);
}).catch(err => {
    console.error('Error generating PPTX:', err);
});
