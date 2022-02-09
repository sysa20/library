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
        private readonly LibraryContext _context;

        public BooksController(LibraryContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return await _context.Book.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(long id)
        {
            var books = await _context.Book.FindAsync(id);

            if (books == null)
            {
                return NotFound();
            }

            return books;
        }

        // GET: api/Books/user/5
        [HttpGet("user/{id}")]
        public async Task<IEnumerable<Book>> GetCustomersBooks(long id)
        {
            return await _context.Book.Where(e => e.user.id == id).ToListAsync();
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(long id, BookDTO book)
        {
            var b = await _context.Book.Include(e => e.user).Where(e => e.id == id).FirstOrDefaultAsync();
            if (b == null)
            {
                return BadRequest();
            }

            b.autor_first_name = book.autor_first_name;
            b.autor_last_name = book.autor_last_name;
            b.book_name = book.book_name;
            b.is_borrowed = book.is_borrowed;

            var u = await _context.Users.FindAsync(book.userid);
            b.user = u; //ak u je null doslo k vrateniu knihy

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
        public async Task<ActionResult<Book>> PostBook(Book books)
        {
            _context.Book.Add(books);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBooks), new { id = books.id }, books);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooks(long id)
        {
            var books = await _context.Book.FindAsync(id);
            if (books == null)
            {
                return NotFound();
            }

            _context.Book.Remove(books);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BooksExists(long id)
        {
            return _context.Book.Any(e => e.id == id);
        }
    }
}
