using System.ComponentModel.DataAnnotations;

namespace EventEase.Models
{
    public class ContactFormModel
    {
        [Required(ErrorMessage = "Full Name is required.")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email address is required.")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Subject is required.")]
        public string Subject { get; set; } = string.Empty;

        [Required(ErrorMessage = "Message content is required.")]
        [MinLength(10, ErrorMessage = "Message must be at least 10 characters long.")]
        public string Message { get; set; } = string.Empty;

        public bool IsSubmitted { get; set; }
    }
}
