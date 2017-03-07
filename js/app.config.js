'use strict';

angular.
module('spotifyApp').
config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/search.html',
        controller: 'SearchController'

    }).
    otherwise({
        redirectTo: '/'
    });
});
