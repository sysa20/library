using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryApi.Models
{
    public class User
    {
        [Key]
        public long id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int lent_books { get; set; }
    }
}