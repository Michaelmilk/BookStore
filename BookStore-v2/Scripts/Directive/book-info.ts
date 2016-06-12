/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export class BookInfo implements ng.IDirective {
        restrict = "E";
        scope = {
            book: "=",
            opts: "=",
            isreadonly: "="
        };
        templateUrl = "/Templates/BookInfo.html";

        constructor() { }

        static factory(): ng.IDirectiveFactory {
            const directive = () => {
                return new BookInfo();
            }
            //directive['$inject'] = [''];
            return directive;
        }
    }
} 