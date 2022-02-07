#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryApi.Models;

namespace LibraryApi.Controllers
{
  [Route("api/books")]
  [ApiController]
  public class BooksController : ControllerBase
  {
    private readonly BooksContext _context;

    public BooksController(BooksContext context)
    {
      _context = context;
    }

    // GET: api/Books
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Books>>> GetBooks()
    {
      return await _context.Books.ToListAsync();
    }

    // GET: api/Books/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Books>> GetBooks(long id)
    {
      var books = await _context.Books.FindAsync(id);

      if (books == null)
      {
        return NotFound();
      }

      return books;
    }

    // PUT: api/Books/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBooks(long id, Books books)
    {
      if (id != books.id)
      {
        return BadRequest();
      }

      _context.Entry(books).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!BooksExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Books
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Books>> PostBooks(Books books)
    {
      _context.Books.Add(books);
      await _context.SaveChangesAsync();

      return CreatedAtAction(nameof(GetBooks), new { id = books.id }, books);
    }

    // DELETE: api/Books/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBooks(long id)
    {
      var books = await _context.Books.FindAsync(id);
      if (books == null)
      {
        return NotFound();
      }

      _context.Books.Remove(books);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool BooksExists(long id)
    {
      return _context.Books.Any(e => e.id == id);
    }
  }
}
