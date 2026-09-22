namespace EventEase.Models
{
    public static class BookingsRepository
    {
        public static List<BookedTicketModel> Bookings { get; } = new List<BookedTicketModel>
        {
            new BookedTicketModel
            {
                BookingReference = "EE-8A92B104",
                EventId = 1,
                EventTitle = "Global Tech Summit 2026",
                CustomerName = "Alex Johnson",
                CustomerEmail = "user@eventease.com",
                CustomerPhone = "+1 (555) 019-2834",
                TicketType = "Standard",
                Quantity = 1,
                TotalAmount = 11999m,
                BookingDate = DateTime.Now.AddDays(-5),
                EventDate = "Oct 15, 2026",
                EventLocation = "Silicon Convention Center"
            }
        };

        public static void AddBooking(BookedTicketModel booking)
        {
            Bookings.Add(booking);
        }

        public static List<BookedTicketModel> GetBookingsForUser(string email)
        {
            return Bookings.Where(b => b.CustomerEmail.Equals(email, StringComparison.OrdinalIgnoreCase)).ToList();
        }
    }
}
