using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryApi.Models
{
    [Table("Books")]
    public class Book
    {
        [Key]
        public long id { get; set; }
        public string autor_first_name { get; set; }
        public string autor_last_name { get; set; }
        public string book_name { get; set; }
        public bool is_borrowed { get; set; }
        public User user { get; set; }
    }
}