'use strict';

// Declare app level module which depends on filters, and services
angular.module('cv', [
    'ngRoute',
    'ngSanitize',
    'cv.controllers',
    'cv.cv'
])
    .config(['$routeProvider', function ($routeProvider) {

        // For any unmatched url, redirect to /state1
        $routeProvider.otherwise("/cv");
    }])
;