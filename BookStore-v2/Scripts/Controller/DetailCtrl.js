/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    var DetailCtrl = (function () {
        function DetailCtrl($scope, ResourceService) {
            this.$scope = $scope;
            this.ResourceService = ResourceService;
            //$scope.bookDetailInfo = ShareService.getElem();
            $scope.vm = this;
            this.bookResource = ResourceService.getBookResource();
            $scope.url = window.document.location.href;
            $scope.url1 = this.$scope.url.slice(this.$scope.url.indexOf("=") + 1);
            //this.getSpecificBook();
        }
        DetailCtrl.prototype.getSpecificBook = function () {
            var _this = this;
            this.bookName = this.$scope.url.slice(this.$scope.url.lastIndexOf("/") + 1);
            this.bookResource.get({ bookName: this.bookName })
                .$promise.then(function (book) {
                _this.$scope.bookDetailInfo = book;
            });
        };
        DetailCtrl.prototype.saveToFile = function () {
            var _this = this;
            //this.getSpecificBook();
            this.bookResource.query()
                .$promise.then(function (book) {
                _this.$scope.bookDetailInfo = book;
                if (!_this.$scope.bookDetailInfo) {
                    console.error('No data');
                    return;
                }
                console.log("book:", _this.$scope.bookDetailInfo);
                //JSON FORMAT
                //if (!this.$scope.filename) {
                //    this.$scope.filename = 'download.json';
                //}
                //if (typeof this.$scope.bookDetailInfo === 'object') {
                //    //this.$scope.bookDetailInfo = JSON.stringify(this.$scope.bookDetailInfo, undefined, 2);
                //}
                ////var blob = new Blob([this.$scope.bookDetailInfo], { type: 'text/json' });
                //var blob = new Blob([this.$scope.bookDetailInfo], { type: 'application/octet-binary' });
                //var e = document.createEvent('MouseEvents');
                //var a: HTMLAnchorElement = document.createElement('a');
                //a.setAttribute("download", this.$scope.filename);
                ////a.download = this.$scope.filename;
                //a.href = window.URL.createObjectURL(blob);
                //a.setAttribute("dataset.downloadurl", ['text/json', this.$scope.filename, a.href].join(':'));
                ////a.dataset.downloadurl = ['text/json', this.$scope.filename, a.href].join(':');
                //e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                //a.dispatchEvent(e);
                //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                //tsv
                var csvContent = "";
                for (var _i = 0, book_1 = book; _i < book_1.length; _i++) {
                    var item = book_1[_i];
                    console.log(item);
                    console.log(item.Name);
                    csvContent += item.Name + "\t";
                    csvContent += item.Author + "\t";
                    csvContent += item.Art + "\t";
                    csvContent += item.Price + "\t";
                    csvContent += item.Description + "\n";
                }
                _this.$scope.filename = 'download.tsv';
                console.log(csvContent);
                //var blob = new Blob([this.$scope.bookDetailInfo], { type: 'text/json' });
                var blob = new Blob([csvContent], { type: 'application/octet-binary' });
                var e = document.createEvent('MouseEvents');
                var a = document.createElement('a');
                a.setAttribute("download", _this.$scope.filename);
                //a.download = this.$scope.filename;
                a.href = window.URL.createObjectURL(blob);
                a.setAttribute("dataset.downloadurl", ['text/csv', _this.$scope.filename, a.href].join(':'));
                //a.dataset.downloadurl = ['text/json', this.$scope.filename, a.href].join(':');
                e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            });
        };
        DetailCtrl.$inject = [
            '$scope',
            'ResourceService'
        ];
        return DetailCtrl;
    })();
    App.DetailCtrl = DetailCtrl;
})(App || (App = {}));
//# sourceMappingURL=DetailCtrl.js.map