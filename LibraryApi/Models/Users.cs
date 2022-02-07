namespace LibraryApi.Models
{
    public class Users
    {
        // [Key]
        public long id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public bool has_lent { get; set; }
        public Books[]? lent_books { get; set; }
    }
}