using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using BookStore_v2.Models;

namespace BookStore_v2.Models
{
    public class BookContext : DbContext
    {
        //static BookContext()
        //{
        //    Database.SetInitializer<BookContext>(new CreateDatabaseIfNotExists<BookContext>());
        //}

        public BookContext()
            : base("Name=BookContext")
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}