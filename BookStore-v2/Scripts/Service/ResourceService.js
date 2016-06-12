/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    var ResourceService = (function () {
        function ResourceService($resource) {
            this.$resource = $resource;
        }
        ResourceService.prototype.getBookResource = function () {
            var update = {
                method: 'PUT',
                isArray: false
            };
            //return ng.resource.IResourceClass<IBookInfo>'s object to op resource
            //return <ng.resource.IResourceClass<IBookInfo>>this.$resource('/api/books/:bookName', { }, {
            return this.$resource('/api/books/:bookName', {}, {
                updateBook: update,
            });
        };
        ResourceService.$inject = [
            '$resource'
        ];
        return ResourceService;
    })();
    App.ResourceService = ResourceService;
})(App || (App = {}));
//# sourceMappingURL=ResourceService.js.map