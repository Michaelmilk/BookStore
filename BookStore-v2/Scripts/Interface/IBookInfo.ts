/// <reference path='../_ref_app_d.ts' />


module App {
    'use strict';
    export interface IBookInfo extends ng.resource.IResource<IBookInfo> {
        Name: string;
        Author: string;
        Type: string;
        Price: number;
        Description: string;
    }
}