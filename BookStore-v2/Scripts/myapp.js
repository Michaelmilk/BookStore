/// <reference path='./_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    var myapp = angular.module('BookStoreApp', ['ngResource']);
    //myapp.filter('unique', function () {
    //    return function (collection, keyname) {
    //        var output = [],
    //            keys = [];
    //        angular.forEach(collection, function (item) {
    //            var key = item[keyname];
    //            if (keys.indexOf(key) === -1) {
    //                keys.push(key);
    //                output.push(item);
    //            }
    //        });
    //        return output;
    //    };
    //});
    //myapp.filter('pagination', function () {
    //    return function (input, start) {
    //        start = parseInt(start, 10);
    //        if (!input || !input.length) { return; }
    //        return input.slice(start);
    //    };
    //});
    myapp.filter('pagination', App.Pagination);
    myapp.filter("unique", App.Unique);
    myapp.filter("FilterBookNameOrAuthor", App.FilterBookNameOrAuthor);
    myapp.service('ResourceService', App.ResourceService);
    //myapp.service('ShareService', ShareService);
    myapp.controller('indexCtrl', App.IndexCtrl);
    myapp.controller('createCtrl', App.CreateCtrl);
    myapp.controller('detailCtrl', App.DetailCtrl);
    myapp.directive("bookInfo", App.BookInfo.factory());
    myapp.directive("paginationTable", App.PaginationTable.factory());
    var myapp = angular.module('sampleapp', []);
})(App || (App = {}));
//# sourceMappingURL=myapp.js.map