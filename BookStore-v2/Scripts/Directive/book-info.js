/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    var BookInfo = (function () {
        function BookInfo() {
            this.restrict = "E";
            this.scope = {
                book: "=",
                opts: "=",
                isreadonly: "="
            };
            this.templateUrl = "/Templates/BookInfo.html";
        }
        BookInfo.factory = function () {
            var directive = function () {
                return new BookInfo();
            };
            //directive['$inject'] = [''];
            return directive;
        };
        return BookInfo;
    })();
    App.BookInfo = BookInfo;
})(App || (App = {}));
//# sourceMappingURL=book-info.js.map