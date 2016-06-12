/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export function Pagination() {
        return function (input, start) {
            start = parseInt(start, 10);
            if (!input || !input.length) { return; }
            return input.slice(start);
        };

    }
}    