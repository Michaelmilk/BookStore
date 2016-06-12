/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export class ResourceService {
        static $inject = [
            '$resource'
        ];

        constructor(private $resource: ng.resource.IResourceService) { }

        getBookResource(): IBookResource {

            var update: ng.resource.IActionDescriptor = {
                method: 'PUT',
                isArray: false
            };
            
            //return ng.resource.IResourceClass<IBookInfo>'s object to op resource
            //return <ng.resource.IResourceClass<IBookInfo>>this.$resource('/api/books/:bookName', { }, {
            return <IBookResource>this.$resource('/api/books/:bookName', {}, {
                updateBook: update,
            });
        }

    }
}