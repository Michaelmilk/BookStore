
//var app = angular.module('BookStoreApp', ['ngResource']);

//app.factory('putbook', ['$resource', function ($resource) {
//    return $resource('api/books/:bookName', { bookName: '@Name' },
//        {
//            update: { method: 'PUT' }
//        });
//}]
//);
//var indexCtrl = function ($scope, putbook, $http, $resource) {

//    $scope.col = 'Name';
//    $scope.desc = 0;

//    var books = $resource('/api/books/:bookName', { bookName: '@Name' });

//    books.query().$promise.then(function(allbooks) {
//        $scope.allbooks = allbooks;
//    });

//    /*
//    books.get({ bookName: $scope.bookName})
//        .$promise.then(function (book) {
//            $scope.book = book;
//        });*/
//    $scope.setBookToDelete = function (bookDel) {
//        $scope.bookDeleted = bookDel;
//    };

//    $scope.deleteBook = function () {
//        books.remove({ bookName: $scope.bookDeleted.Name }, function(response) {
//            console.log(response);
//            window.document.location.href = "/";
//        });
//    };


//    var edit = $resource('/api/books/');
//    $scope.opts = ["Travel", "Art ", "Health", "Science", "History", "Cook", "Comics"];
//    $scope.setBookToEdit = function (bookEdit) {
//        $scope.bookEdit = bookEdit;
//    };

//    //post method to update book
//    //$scope.updateBook = function () {
//    //    edit.save($scope.bookEdit, function (result) {
//    //        //if (result.status != 'OK')
//    //        //    throw result.status;

//    //        //$scope.images.push(result.data);
//    //        console.log(result.data);
//    //        window.document.location.href = "/";
//    //    });
//    //}


//    //http put method to update book
//    //$scope.put = function() {
//    //    var request = $http({
//    //        method: "put",
//    //        url: "/api/books/" + $scope.bookEdit.Name,
//    //        data: $scope.bookEdit
//    //    });
//    //    return request;
//    //};

//    //$scope.updateBook = function () {
//    //    $scope.put().then(function (ret) {
//    //        console.log(ret);
//    //        window.document.location.href = "/";
//    //    });
//    //};


//    //$resource put method to update book
//    //var putbook = $resource('/api/books/:bookName', { bookName: '@Name' }, {
//    //    update: {
//    //    method: 'PUT'
//    //    }
//    //});


//    $scope.updateBook = function () {
//        putbook.update({ bookName: $scope.bookEdit.Name }, $scope.bookEdit,
//            function (response) {
//                 console.log(response);
//                 window.document.location.href = "/";
//        });
//    };
//};

//var createCtrl = function ($scope, $resource) {
//    $scope.opts = ["Travel", "Art ", "Health", "Science", "History", "Cook", "Comics"];
//    var books = $resource('/api/books/');
//    $scope.bookSubmit = function() {
//        books.save($scope.book, function(result) {
//            //if (result.status != 'OK')
//            //    throw result.status;

//            //$scope.images.push(result.data);
//            console.log(result.data);
//            window.document.location.href = "/";
//        });
//    }
//    //window.document.location.href = "/";
//};

//app.controller('indexCtrl', indexCtrl);

//app.controller('createCtrl', createCtrl);

////app.directive("bookInfo", function () {
////    return {
////        restrict : "EA",
////        templateUrl : "../Templates/BookInfo.html"
////    };
////});

////app.directive("bookInfo", BookInfo.factory());