using System.ComponentModel.DataAnnotations;

namespace EventEase.Models
{
    public class BookingViewModel
    {
        public int EventId { get; set; }
        
        public string EventTitle { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter your full name")]
        public string CustomerName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter your email address")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string CustomerEmail { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter your phone number")]
        public string CustomerPhone { get; set; } = string.Empty;

        [Required]
        public string TicketType { get; set; } = "Standard";

        [Range(1, 10, ErrorMessage = "You can book between 1 and 10 tickets.")]
        public int Quantity { get; set; } = 1;

        public decimal TicketPrice { get; set; }
        public decimal TotalAmount { get; set; }

        public bool IsSubmitted { get; set; }
        public string BookingReference { get; set; } = string.Empty;
    }
}
