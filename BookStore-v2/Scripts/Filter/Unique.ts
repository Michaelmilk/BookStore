/// <reference path='../_ref_app_d.ts' />

module App {
    'use strict';

    export function Unique() {
        return function (collection, keyname) {
            var output = [],
                keys = [];

            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            //console.log(output);
           // console.log(keys);
            return output;
        };

    }
}   