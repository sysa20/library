namespace LibraryApi.Models
{
    public class Books
    {
        // [Key]
        public long id { get; set; }
        public string autor_first_name { get; set; }
        public string autor_last_name { get; set; }
        public string book_name { get; set; }
        public long count_borrowed { get; set; }
    }
}