var app = angular.module('recipeBlog', ['ngRoute']);

recipeBlog.controller('maincourseCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

    console.log('Maincourse controller loaded...');
    
    $scope.getMaincourseRecipes = function(){


        $http.get('/api/posts').success(function(response){

            $scope.posts = response; 
        })
    }

}]);

