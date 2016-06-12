/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export class PaginationTable implements ng.IDirective {
        restrict = "E";
        scope = {
            currentPage: "=",
            itemCount: "=",
            pageSize: "=",
            loadPage: "&"//load page
        };
        templateUrl = "/Templates/PaginationTable.html";

        constructor() { }

        static factory(): ng.IDirectiveFactory {
            const directive = () => {
                return new PaginationTable();
            }
            return directive;
        }

        link = ($scope: any) => {

            $scope.init = () => {
                $scope.pageNum = Math.ceil($scope.itemCount / $scope.pageSize) - 1;
            }

            $scope.pageRange = () => {
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

            $scope.setPage = (n) => {
                $scope.currentPage = n;
                $scope.loadPage();
            };

            $scope.prevPage = () => {
                if ($scope.currentPage > 0)
                    $scope.currentPage--;
                $scope.loadPage();
            }

            $scope.disablePrevPage = () => {
                return $scope.currentPage === 0 ? "disabled" : "";
            }

            $scope.nextPage = () => {
                if ($scope.currentPage < $scope.pageNum)
                    $scope.currentPage++;
                $scope.loadPage();
            }

            $scope.disableNextPage = () => {
                return $scope.currentPage >= $scope.pageNum ? "disabled" : "";
            }

            $scope.init();

        }
    }
}  