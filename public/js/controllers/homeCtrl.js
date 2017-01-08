angular.module('recipeBlog')

	.controller('HomeController', ['$scope', '$http', function($scope, $http){

		console.log('Home controller loaded...');

    // Get Recipes


		// Get maincourse recipes

			$scope.getMaincourseRecipes = function(){

				$http.get('/api/posts/category/Maincourse').then(function(response){
				
					$scope.maincourseRecipes = response.data;  
					console.log(response.data)
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get snacks recipes

			$scope.getSnacksRecipes = function(){

				$http.get('/api/posts/category/Snacks').then(function(response){
				
					$scope.snacksRecipes = response.data;  
					console.log(response.data)
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get starters recipes

			$scope.getStartersRecipes = function(){

				$http.get('/api/posts/category/Starters').then(function(response){
				
					$scope.startersRecipes = response.data;  
					console.log(response.data)
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get desserts recipes

			$scope.getDessertsRecipes = function(){

				$http.get('/api/posts/category/Desserts').then(function(response){
				
					$scope.dessertsRecipes = response.data;  
					console.log(response.data)
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get beverages recipes

			$scope.getBeveragesRecipes = function(){

				$http.get('/api/posts/category/Beverages').then(function(response){
				
					$scope.beveragesRecipes = response.data;  
					console.log(response.data)
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get popular recipes

			$scope.getPopularRecipes = function(){

				$http.get('/api/posts/category/Popular').then(function(response){
				
					$scope.popularRecipes = response.data;  
					console.log(response.data)
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

	}]);


