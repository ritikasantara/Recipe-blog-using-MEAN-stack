var app = angular.module('myApp', ['ngRoute'])

                .controller('maincourse', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

                    console.log('Maincourse controller loaded...');
                    
                    $scope.getMaincourseRecipes = function(){


                        $http.get('/api/posts').success(function(response){

                            $scope.maincourseRecipes = response; 
                        })
                    }

                }]);

