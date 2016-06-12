/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export interface IdxScope extends ng.IScope {

        vm: any;

        allbooks: Array<IBookInfo>;

        selectedType: any;

        searchStr: string;

        col: string;

        desc: number;

        opts: Array<string>;

        isReadOnly: string;

        bookDeleted: IBookInfo;

        bookEdit: IBookInfo;

        bookDetail: IBookInfo;

        bookCount: number;

        count: number;

        isFilter: boolean;

        //////page
        itemsPerPage: number;

        currentPage: number;

        isShowAll: boolean;

        text: string;

        filterSet: Array<IBookInfo>;

        filterLen: number;
    }

    export class IndexCtrl {

        static $inject = [
            '$scope',
            //'ShareService' order problem ?!!??
            'ResourceService',
            'filterFilter'
        ];

        private bookResource;
        private shareServ;
        constructor(private $scope: IdxScope, private ResourceService, private filterFilter) {
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

        queryBooks() {
            //http://stackoverflow.com/questions/26411685/typeerror-cannot-read-property-scope-of-undefined
            this.bookResource.query().$promise.then((allbooks) => {
                this.$scope.allbooks = allbooks;
                this.$scope.bookCount = allbooks.length;
                //this.$scope.allbooks = [
                //    { Name: "wwwww", Author: "1", type: "r23", price: 199.00, Description:"sdfsdf"},
                //    { Name: "ssss", Author: "1", type: "r322222", price: 139.00, Description: "sdfsdf" },
                //    { Name: "AngularJS", Author: "2", type: "r22222", price: 84.20, Description: "sdfsdf" }
                //];
            });
        }
        

        setBookToDelete(bookDel) {
            this.$scope.bookDeleted = bookDel;
        }

        deleteBook() {
            this.bookResource.remove({ bookName: this.$scope.bookDeleted.Name }, (response)=> {
                window.document.location.href = "/";
            });
        }
        
        setBookToEdit(bookEdit) {
            this.$scope.bookEdit = bookEdit;
        }

        updateBook() {
            this.bookResource.updateBook({ bookName: this.$scope.bookEdit.Name }, this.$scope.bookEdit,
               (response) => {
                    console.log(response);
                    window.document.location.href = "/";
                });
        }

        showDetail(bookDetail) {
            this.$scope.bookDetail = bookDetail;
        }

        transferDetail(bookDetail: IBookInfo) {
            //this.shareServ.Name = bookDetail.Name;
            window.location.href = "/Home/Detail/id=" + bookDetail.Name;
        }


        range() {
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
        }

        prevPage() {
            if (this.$scope.currentPage > 0) {
                this.$scope.currentPage--;
            }
        }

        DisablePrevPage() {
            return this.$scope.currentPage === 0 ? "disabled" : "";
        }

        pageCount() {
            return Math.ceil(this.$scope.bookCount / this.$scope.itemsPerPage) - 1;//this.$scope.allbooks.length
        }

        nextPage() {
            if (this.$scope.currentPage < this.pageCount()) {
                this.$scope.currentPage++;
            }
        }

        DisableNextPage() {
            return this.$scope.currentPage >= this.pageCount() ? "disabled" : "";//search res is empty disable "next"
        }

        setPage(n) {
            this.$scope.currentPage = n;
        }

        showAll() {
            if (this.$scope.text === "Show All")
                this.$scope.text = "Collapse";
            else
                this.$scope.text = "Show All";
            this.$scope.isShowAll = !this.$scope.isShowAll;
        }

        setFilter() {
            if (this.$scope.selectedType == null && (this.$scope.searchStr == null || this.$scope.searchStr == "")) {
                this.$scope.bookCount = this.$scope.allbooks.length;
            } else {
                if (this.$scope.selectedType == null) {
                    this.$scope.filterSet = this.filterFilter(this.$scope.allbooks, { Name: this.$scope.searchStr });
                } else if (this.$scope.searchStr == null || this.$scope.searchStr == "") {
                    this.$scope.filterSet = this.filterFilter(this.$scope.allbooks, { Type: this.$scope.selectedType.Type });
                } else {
                    this.$scope.filterSet = this.filterFilter(this.$scope.allbooks, { Name: this.$scope.searchStr });
                    this.$scope.filterSet = this.filterFilter(this.$scope.filterSet, { Type: this.$scope.selectedType.Type });
                }
                this.$scope.filterLen = this.$scope.filterSet.length;
                this.$scope.bookCount = this.$scope.filterLen;
            }
            this.$scope.currentPage = 0;//switch to 2nd page， then input searchStr page will reset to 1st!!!!
        }

        setBookNumPerPage(num: number) {
            this.$scope.itemsPerPage = num;
            this.$scope.currentPage = 0;////when switch to 2nd+ page， then input searchStr page will reset to 1st!!!!
        }
    }
}  