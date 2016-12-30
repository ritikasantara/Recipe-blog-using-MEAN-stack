
var app = angular.module('recipeBlog', ['ngRoute'])

                .controller('HomeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){


                    console.log('Home controller loaded...');
                   
                    $scope.getMaincourseRecipes = function(){


                        $http.get('/api/posts/categories/Maincourse').success(function(response){

                            $scope.maincourseRecipes = response; 
                        })
                    }

                }]);

