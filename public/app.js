var thisApp = angular.module('recipeBlog', ['ui.router']);

thisApp.config(function($stateProvider, $urlRouterProvider) {
   
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'views/home.html'

        });
        
    $urlRouterProvider.otherwise('/home');
        
});



// var app = angular.module('recipeBlog', ['ngRoute'])

//                     .config(function($routeProvider){

//                             $routeProvider

//                                 .when('/', 
//                                 {
//                                     controller: 'homeController',
//                                     templateUrl: 'views/home.html'
//                                 })

//                                 .when('/home', {

//                                     controller: 'homeController',
//                                     templateUrl: 'views/home.html'

//                                 })

//                                 .when('/recipes/maincourse', {

//                                     controller: 'maincourse',
//                                     templateUrl: 'views/maincourse_recipes.html'

//                                 })

//                                 .when('/recipes/maincourse/:id', {

//                                     controller: 'maincourse',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/snacks', {

//                                     controller: 'snacksCtrl',
//                                     templateUrl: 'views/snacks_recipes.html'
//                                 })

//                                 .when('/recipes/snacks/:id', {

//                                     controller: 'snacksCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/starters', {

//                                     controller: 'startersCtrl',
//                                     templateUrl: 'views/starters_recipes.html'
//                                 })

//                                 .when('/recipes/starters/:id', {

//                                     controller: 'startersCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/desserts', {

//                                     controller: 'dessertsCtrl',
//                                     templateUrl: 'views/desserts_recipes.html'
//                                 })

//                                 .when('/recipes/desserts/:id', {

//                                     controller: 'dessertsCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/beverages', {

//                                     controller: 'beveragesCtrl',
//                                     templateUrl: 'views/beverages_recipes.html'
//                                 })

//                                 .when('/recipes/beverages/:id', {

//                                     controller: 'beveragesCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/popular', {

//                                     controller: 'popularCtrl',
//                                     templateUrl: 'views/popular_recipes.html'
//                                 })

//                                 .when('/recipes/popular/:id', {

//                                     controller: 'popularCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })
                                
//                                 .when('/recipes/add', {

//                                     controller: 'adminCtrl',
//                                     templateUrl: 'views/addRecipes.html'
//                                 })

//                                 .when('/recipes/edit', {

//                                     controller: 'adminCtrl',
//                                     templateUrl: 'views/editRecipes.html'
//                                 })

//                                 .when('/article/:id', {

//                                     controller: 'articleCtrl',
//                                     templateUrl: 'views/article_details.html'
//                                 })
                        
//                                 .otherwise({ redirectTo: '/' });
                                
//                         });


              

