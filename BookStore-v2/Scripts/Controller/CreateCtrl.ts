/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export interface ICreateScope extends ng.IScope {

        vm: any;

        opts: Array<string>;

        book: IBookInfo;

        isReadOnly: string;

        log: any;
    }

    //export class CreateCtrl extends Controller {
    export class CreateCtrl {

        static $inject = [
            '$scope',
            //'$document',
            'ResourceService'
        ];

        private bookResource;
        constructor(private $scope: ICreateScope, private ResourceService) {
            $scope.opts = ["Travel", "Art ", "Health", "Science", "History", "Cook", "Comics"];
            $scope.vm = this;
            $scope.isReadOnly = "false";
            this.bookResource = ResourceService.getBookResource();
        }

        bookSubmit() {
            console.log("hahahhaha");
        
            this.bookResource.save(this.$scope.book, (result)=> {
                this.$scope.log = result;
                this.redirectPage();
            });
        }

        redirectPage() {
            window.document.location.href = "/";
        }
    }
} 