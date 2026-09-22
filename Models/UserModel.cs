namespace EventEase.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Role { get; set; } = "Member";
        public DateTime JoinedDate { get; set; } = DateTime.Now;
    }
}
