/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    var PaginationTable = (function () {
        function PaginationTable() {
            this.restrict = "E";
            this.scope = {
                currentPage: "=",
                itemCount: "=",
                pageSize: "=",
                loadPage: "&" //load page
            };
            this.templateUrl = "/Templates/PaginationTable.html";
            this.link = function ($scope) {
                $scope.init = function () {
                    $scope.pageNum = Math.ceil($scope.itemCount / $scope.pageSize) - 1;
                };
                $scope.pageRange = function () {
                    $scope.pageNum = Math.ceil($scope.itemCount / $scope.pageSize) - 1;
                    var rangeSize = $scope.pageNum > 4 ? 4 : $scope.pageNum;
                    var pages = [];
                    var start = $scope.currentPage;
                    //determine the scale of page nums
                    if (start > $scope.pageNum - rangeSize) {
                        start = $scope.pageNum - rangeSize;
                    }
                    //generate page num
                    for (var i = start; i <= start + rangeSize; i++)
                        pages.push(i);
                    return pages;
                };
                $scope.setPage = function (n) {
                    $scope.currentPage = n;
                    $scope.loadPage();
                };
                $scope.prevPage = function () {
                    if ($scope.currentPage > 0)
                        $scope.currentPage--;
                    $scope.loadPage();
                };
                $scope.disablePrevPage = function () {
                    return $scope.currentPage === 0 ? "disabled" : "";
                };
                $scope.nextPage = function () {
                    if ($scope.currentPage < $scope.pageNum)
                        $scope.currentPage++;
                    $scope.loadPage();
                };
                $scope.disableNextPage = function () {
                    return $scope.currentPage >= $scope.pageNum ? "disabled" : "";
                };
                $scope.init();
            };
        }
        PaginationTable.factory = function () {
            var directive = function () {
                return new PaginationTable();
            };
            return directive;
        };
        return PaginationTable;
    })();
    App.PaginationTable = PaginationTable;
})(App || (App = {}));
//# sourceMappingURL=pagination-table.js.map