using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace BookStore_v2.Models
{
    public class Book
    {
        [Key]
        public string Name { get; set; }
        public string Author { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
    }
}