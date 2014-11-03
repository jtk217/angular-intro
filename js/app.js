/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

// create new angular module
angular.module('MovieApp', [])
    .controller('MoviesController', function($scope) {
        $scope.movies = movies;
        $scope.searchString = '';
        $scope.sortCol = 'rank';
        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
            $scope.sortReverse = $scope.sortCol == colName ? !$scope.sortReverse : false;
            $scope.sortCol = colName;
        };
    });