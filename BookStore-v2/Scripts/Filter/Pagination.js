/// <reference path='../_ref_app_d.ts' />
var App;
(function (App) {
    'use strict';
    function Pagination() {
        return function (input, start) {
            start = parseInt(start, 10);
            if (!input || !input.length) {
                return;
            }
            return input.slice(start);
        };
    }
    App.Pagination = Pagination;
})(App || (App = {}));
//# sourceMappingURL=Pagination.js.map