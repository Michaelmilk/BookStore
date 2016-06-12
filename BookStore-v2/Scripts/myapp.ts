/// <reference path='./_ref_app_d.ts' />


module App {
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

    myapp.filter('pagination', Pagination);

    myapp.filter("unique", Unique);

    myapp.filter("FilterBookNameOrAuthor", FilterBookNameOrAuthor);

    myapp.service('ResourceService', ResourceService);

    //myapp.service('ShareService', ShareService);

    myapp.controller('indexCtrl', IndexCtrl);

    myapp.controller('createCtrl', CreateCtrl);

    myapp.controller('detailCtrl', DetailCtrl);

    myapp.directive("bookInfo", BookInfo.factory());

    myapp.directive("paginationTable", PaginationTable.factory());

    var myapp = angular.module('sampleapp', []);
 
}