/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    var IndexCtrl = (function () {
        function IndexCtrl($scope, ResourceService, filterFilter) {
            this.$scope = $scope;
            this.ResourceService = ResourceService;
            this.filterFilter = filterFilter;
            $scope.col = "Name";
            $scope.desc = 0;
            $scope.vm = this;
            $scope.opts = ["Travel", "Art ", "Health", "Science", "History", "Cook", "Comics"];
            $scope.isReadOnly = "true";
            this.bookResource = ResourceService.getBookResource();
            //this.shareServ = ShareService.getElem();
            this.queryBooks();
            $scope.itemsPerPage = 3;
            $scope.currentPage = 0;
            $scope.isShowAll = false;
            $scope.text = "Show All";
            $scope.count = 0;
            $scope.isFilter = false;
            $scope.searchStr = "";
        }
        IndexCtrl.prototype.queryBooks = function () {
            var _this = this;
            //http://stackoverflow.com/questions/26411685/typeerror-cannot-read-property-scope-of-undefined
            this.bookResource.query().$promise.then(function (allbooks) {
                _this.$scope.allbooks = allbooks;
                _this.$scope.bookCount = allbooks.length;
                //this.$scope.allbooks = [
                //    { Name: "wwwww", Author: "1", type: "r23", price: 199.00, Description:"sdfsdf"},
                //    { Name: "ssss", Author: "1", type: "r322222", price: 139.00, Description: "sdfsdf" },
                //    { Name: "AngularJS", Author: "2", type: "r22222", price: 84.20, Description: "sdfsdf" }
                //];
            });
        };
        IndexCtrl.prototype.setBookToDelete = function (bookDel) {
            this.$scope.bookDeleted = bookDel;
        };
        IndexCtrl.prototype.deleteBook = function () {
            this.bookResource.remove({ bookName: this.$scope.bookDeleted.Name }, function (response) {
                window.document.location.href = "/";
            });
        };
        IndexCtrl.prototype.setBookToEdit = function (bookEdit) {
            this.$scope.bookEdit = bookEdit;
        };
        IndexCtrl.prototype.updateBook = function () {
            this.bookResource.updateBook({ bookName: this.$scope.bookEdit.Name }, this.$scope.bookEdit, function (response) {
                console.log(response);
                window.document.location.href = "/";
            });
        };
        IndexCtrl.prototype.showDetail = function (bookDetail) {
            this.$scope.bookDetail = bookDetail;
        };
        IndexCtrl.prototype.transferDetail = function (bookDetail) {
            //this.shareServ.Name = bookDetail.Name;
            window.location.href = "/Home/Detail/id=" + bookDetail.Name;
        };
        IndexCtrl.prototype.range = function () {
            //avoid -1, 0 page item, show 4 pages, click next/prev can show more
            var rangeSize = this.pageCount() > 4 ? 4 : this.pageCount() + 1;
            //if (this.pageCount() < 4)
            //    rangeSize = this.pageCount() + 1; 
            var ps = [];
            var start;
            start = this.$scope.currentPage;
            if (start > this.pageCount() - rangeSize) {
                start = this.pageCount() - rangeSize + 1;
            }
            for (var i = start; i < start + rangeSize; i++) {
                ps.push(i);
            }
            return ps;
        };
        IndexCtrl.prototype.prevPage = function () {
            if (this.$scope.currentPage > 0) {
                this.$scope.currentPage--;
            }
        };
        IndexCtrl.prototype.DisablePrevPage = function () {
            return this.$scope.currentPage === 0 ? "disabled" : "";
        };
        IndexCtrl.prototype.pageCount = function () {
            return Math.ceil(this.$scope.bookCount / this.$scope.itemsPerPage) - 1; //this.$scope.allbooks.length
        };
        IndexCtrl.prototype.nextPage = function () {
            if (this.$scope.currentPage < this.pageCount()) {
                this.$scope.currentPage++;
            }
        };
        IndexCtrl.prototype.DisableNextPage = function () {
            return this.$scope.currentPage >= this.pageCount() ? "disabled" : ""; //search res is empty disable "next"
        };
        IndexCtrl.prototype.setPage = function (n) {
            this.$scope.currentPage = n;
        };
        IndexCtrl.prototype.showAll = function () {
            if (this.$scope.text === "Show All")
                this.$scope.text = "Collapse";
            else
                this.$scope.text = "Show All";
            this.$scope.isShowAll = !this.$scope.isShowAll;
        };
        IndexCtrl.prototype.setFilter = function () {
            if (this.$scope.selectedType == null && (this.$scope.searchStr == null || this.$scope.searchStr == "")) {
                this.$scope.bookCount = this.$scope.allbooks.length;
            }
            else {
                if (this.$scope.selectedType == null) {
                    this.$scope.filterSet = this.filterFilter(this.$scope.allbooks, { Name: this.$scope.searchStr });
                }
                else if (this.$scope.searchStr == null || this.$scope.searchStr == "") {
                    this.$scope.filterSet = this.filterFilter(this.$scope.allbooks, { Type: this.$scope.selectedType.Type });
                }
                else {
                    this.$scope.filterSet = this.filterFilter(this.$scope.allbooks, { Name: this.$scope.searchStr });
                    this.$scope.filterSet = this.filterFilter(this.$scope.filterSet, { Type: this.$scope.selectedType.Type });
                }
                this.$scope.filterLen = this.$scope.filterSet.length;
                this.$scope.bookCount = this.$scope.filterLen;
            }
            this.$scope.currentPage = 0; //switch to 2nd page， then input searchStr page will reset to 1st!!!!
        };
        IndexCtrl.prototype.setBookNumPerPage = function (num) {
            this.$scope.itemsPerPage = num;
            this.$scope.currentPage = 0; ////when switch to 2nd+ page， then input searchStr page will reset to 1st!!!!
        };
        IndexCtrl.$inject = [
            '$scope',
            //'ShareService' order problem ?!!??
            'ResourceService',
            'filterFilter'
        ];
        return IndexCtrl;
    })();
    App.IndexCtrl = IndexCtrl;
})(App || (App = {}));
//# sourceMappingURL=IndexCtrl.js.map