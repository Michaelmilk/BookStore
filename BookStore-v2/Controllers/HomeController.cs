using BookStore_v2.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace BookStore_v2.Controllers
{
    public class HomeController : Controller
    {
        private BookContext db = new BookContext();
        public ActionResult Index()
        {
            //db.Books.AddOrUpdate(new Book[]
            //{
            //    new Book() { Name = "Ralls, Kim", Author = "aaaa", Type = "c", Price = 9.9m, Description = "2134156465"},
            //    new Book() { Name = "Corets, Eva", Author = "bbb", Type = "b", Price = 21.9m, Description = "444444444444"},
            //    new Book() { Name = "Randall, Cynthia", Author = "ccccc", Type = "d", Price = 22.9m, Description = "555555555"},
            //    new Book() { Name = "Thurman,555 Paula", Author = "dddd", Type = "f", Price = 55.9m, Description = "77777777777"}
            //});

            //db.SaveChangesAsync();
            //ViewBag.bookList = db.Books.ToList();

            return View(db.Books.ToList());
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Create()
        {
            ViewBag.Message = "Your create page.";

            return View();
        }

        public async Task<ActionResult> Detail(string id)
        {
            ViewBag.Message = "Your Detail page.";

            var bookCtrl = new BookController();
            var response = await bookCtrl.GetSpecificBook(id) as OkNegotiatedContentResult<Book>;
            var book = response.Content;

            return View(book);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Name, Author, Type, Price, Description")]Book book)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    db.Books.Add(book);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            catch (RetryLimitExceededException /* dex */)
            {
                //Log the error (uncomment dex variable name and add a line here to write a log.
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(book);
        }
    }
}