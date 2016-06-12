/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    //export class CreateCtrl extends Controller {
    var CreateCtrl = (function () {
        function CreateCtrl($scope, ResourceService) {
            this.$scope = $scope;
            this.ResourceService = ResourceService;
            $scope.opts = ["Travel", "Art ", "Health", "Science", "History", "Cook", "Comics"];
            $scope.vm = this;
            $scope.isReadOnly = "false";
            this.bookResource = ResourceService.getBookResource();
        }
        CreateCtrl.prototype.bookSubmit = function () {
            var _this = this;
            console.log("hahahhaha");
            this.bookResource.save(this.$scope.book, function (result) {
                _this.$scope.log = result;
                _this.redirectPage();
            });
        };
        CreateCtrl.prototype.redirectPage = function () {
            window.document.location.href = "/";
        };
        CreateCtrl.$inject = [
            '$scope',
            //'$document',
            'ResourceService'
        ];
        return CreateCtrl;
    })();
    App.CreateCtrl = CreateCtrl;
})(App || (App = {}));
//# sourceMappingURL=CreateCtrl.js.map