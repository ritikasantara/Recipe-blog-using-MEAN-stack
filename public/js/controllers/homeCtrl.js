angular.module('recipeBlog')
	.controller('HomeController', ['$scope', '$http', function($scope, $http){
		console.log('Home controller loaded...');
		$scope.getMaincourseRecipes = function(){
			$http.get('/api/posts/categories/Maincourse').success(function(response){
				$scope.maincourseRecipes = response;
			})
		}

	}]);

