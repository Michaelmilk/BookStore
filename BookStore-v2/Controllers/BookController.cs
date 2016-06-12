using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using BookStore_v2.Models;
using System.Data.Entity.Infrastructure;
using System.Data.Entity;

namespace BookStore_v2.Controllers
{
    public class BookController : ApiController
    {
        private BookContext db = new BookContext();

        [Route("api/books")]
        public IQueryable<Book> GetBooks()
        {
            var books = from b in db.Books
                        select b;
            return books;
        }

        [HttpGet]
        [Route("api/books/{bookName}")]
        public async Task<IHttpActionResult> GetSpecificBook(string bookName)
        {
            Book existBook = await db.Books.FindAsync(bookName);
            return Ok(existBook);
        }

        [HttpPost]
        [Route("api/books/")]
        public async Task<IHttpActionResult> AddBooks(Book book)
        {
            Book existBook = await db.Books.FindAsync(book.Name);
            if (existBook != null)
            {
                db.Books.Remove(existBook);
            }
            
            db.Books.Add(book);
            await db.SaveChangesAsync();
            return Ok(book);
        }

        [HttpDelete]
        [Route("api/books/{bookName}")]
        public async Task<IHttpActionResult> DeleteBook(string bookName)
        {
            Book book = await db.Books.FindAsync(bookName);
            if (book == null)
            {
                return NotFound();
            }

            db.Books.Remove(book);
            await db.SaveChangesAsync();
            return Ok(bookName);
        }


        [HttpPut]
        [Route("api/books/{bookName}")]
        public async Task<IHttpActionResult> UpdateBook(string bookName, Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (bookName != book.Name)
            {
                return BadRequest();
            }

            db.Entry(book).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(bookName))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        private bool BookExists(string bookName)
        {
            return db.Books.Count(e => e.Name == bookName) > 0;
        }
    }
}
