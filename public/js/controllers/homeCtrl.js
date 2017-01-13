angular.module('recipeBlog')

	.controller('HomeController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){

		console.log('Home controller loaded...');

    // Get Recipes


		// Get maincourse recipes

			$scope.getMaincourseRecipes = function(){

				$http.get('/api/posts/category/Maincourse').then(function(response){
				
					$scope.maincourseRecipes = response.data;  
				
				}, 

				function(error) {  
					console.log("Error: " + error);  
				});

			}

		// Get snacks recipes

			$scope.getSnacksRecipes = function(){

				$http.get('/api/posts/category/Snacks').then(function(response){
				
					$scope.snacksRecipes = response.data;  
					
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get starters recipes

			$scope.getStartersRecipes = function(){

				$http.get('/api/posts/category/Starters').then(function(response){
				
					$scope.startersRecipes = response.data;  
				
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get desserts recipes

			$scope.getDessertsRecipes = function(){

				$http.get('/api/posts/category/Desserts').then(function(response){
				
					$scope.dessertsRecipes = response.data;  
					
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get beverages recipes

			$scope.getBeveragesRecipes = function(){

				$http.get('/api/posts/category/Beverages').then(function(response){
				
					$scope.beveragesRecipes = response.data;  
					
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get popular recipes

			$scope.getPopularRecipes = function(){

				$http.get('/api/posts/category/Popular').then(function(response){
				
					$scope.popularRecipes = response.data;  
					
			}, 

			function(error) {  
				console.log("Error: " + error);  
			}); 

				
			}

		// Get recipes by id

			$scope.getRecipe = function(){

				var id = $stateParams.id;

				$http.get('/api/posts/' +id).then(function(response){
				
					$scope.recipe = response.data;  
					
				}, 

				function(error) {  
					console.log("Error: " + error);  
				}); 

		
			}

		// Get articles

			$scope.getArticles = function(){


				$http.get('/api/articles').then(function(response){
				
					$scope.articles = response.data;  
					
				}, 

				function(error) {  
					console.log("Error: " + error);  
				}); 

		
			}

		// Get article by id

			$scope.getArticle = function(){

				var id = $stateParams.id;

				$http.get('/api/articles/' +id).then(function(response){
				
					$scope.article = response.data;  
					
				}, 

				function(error) {  
					console.log("Error: " + error);  
				}); 

		
			}

		// Adding a Maincourse recipe

			$scope.addMaincourseRecipe = function(){

				alert('controller loaded');
				$http.post('/api/posts/', $scope.maincourseRecipe).then(function(response){
					
					window.location.href = '#!/recipes/maincourse';

				}), 

				function(error) {  
					console.log("Error: " + error);  
				}


			}		


		// Adding a Snacks recipe

			$scope.addSnacksRecipe = function(){

				$http.post('/api/posts/', $scope.snacksRecipe).then(function(response){

					window.location.href = '#!/recipes/snacks';

				})

			}
		
		

	

	}]);


