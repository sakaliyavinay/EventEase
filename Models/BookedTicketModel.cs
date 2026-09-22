namespace EventEase.Models
{
    public class BookedTicketModel
    {
        public string BookingReference { get; set; } = string.Empty;
        public int EventId { get; set; }
        public string EventTitle { get; set; } = string.Empty;
        public string CustomerName { get; set; } = string.Empty;
        public string CustomerEmail { get; set; } = string.Empty;
        public string CustomerPhone { get; set; } = string.Empty;
        public string TicketType { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime BookingDate { get; set; } = DateTime.Now;
        public string EventDate { get; set; } = string.Empty;
        public string EventLocation { get; set; } = string.Empty;
    }
}
