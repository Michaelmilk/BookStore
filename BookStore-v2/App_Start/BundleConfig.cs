using System.Web;
using System.Web.Optimization;

namespace BookStore_v2
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      //"~/Scripts/bootstrap-table.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/bootstrap.css",
                      //"~/Content/bootstrap-table.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/lib/angular.js",
                      "~/Scripts/lib/angular-resource.js",
                      "~/Scripts/lib/angular-sanitize.js"));

            bundles.Add(new StyleBundle("~/bundles/app").Include(
                      //class
                      "~/Scripts/Base/BaseController.js",

                      //filter
                      "~/Scripts/Filter/Unique.js",
                      "~/Scripts/Filter/Pagination.js",
                      "~/Scripts/Filter/FilterBookNameOrAuthor.js",

                      //interface
                      "~/Scripts/Interface/IBookInfo.js",
                      "~/Scripts/Interface/IBookResource.js",

                      //Service
                      "~/Scripts/Service/ResourceService.js",
                      "~/Scripts/Service/ShareService.js",

                      //Directive
                      "~/Scripts/Directive/book-info.js",
                      "~/Scripts/Directive/pagination-table.js",
                      
                      //Controller
                      "~/Scripts/Controller/CreateCtrl.js",
                      "~/Scripts/Controller/IndexCtrl.js",
                      "~/Scripts/Controller/DetailCtrl.js",
                      

                      "~/Scripts/myapp.js"
                      //"~/Scripts/app.js"
                      ));
        }
    }
}
