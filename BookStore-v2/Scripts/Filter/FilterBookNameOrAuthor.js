/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    function FilterBookNameOrAuthor() {
        return function (books, queryStr) {
            var output = [];
            angular.forEach(books, function (item) {
                console.log(item);
                console.log("query", queryStr);
                console.log("Name-a", item.Name + item.Author);
                console.log((item.Name + item.Author).indexOf(queryStr));
                if ((item.Name + item.Author).indexOf(queryStr) >= 0) {
                    output.push(item);
                    console.log("output", item);
                }
            });
            console.log(output);
            return output;
        };
    }
    App.FilterBookNameOrAuthor = FilterBookNameOrAuthor;
})(App || (App = {}));
//# sourceMappingURL=FilterBookNameOrAuthor.js.map