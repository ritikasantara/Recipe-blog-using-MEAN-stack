
var app = angular.module('recipeBlog', ['ngRoute']);

app.controller('homeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){


    console.log('Home controller loaded...');
    
    $scope.getMaincourseRecipes = function(){


        $http.get('/api/posts/categories/Maincourse').success(function(response){

            $scope.maincourseRecipes = response; 
        })
    }

}]);

// var myApp = angular.module("myApp", []);

// (function(app){
//   "use strict";
//   app.controller("productController", function($scope, $http){
//     $http.get('data/data.json').then(function(prd){
//       $scope.prd = prd.data;
//     });
//   });
// })(myApp);