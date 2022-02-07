using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace LibraryApi.Models
{
  public class BooksContext : DbContext
  {
    public BooksContext(DbContextOptions<BooksContext> options)
        : base(options)
    {
    }

    public DbSet<Books> Books { get; set; } = null!;
  }
}