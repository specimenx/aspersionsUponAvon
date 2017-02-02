var app = angular.module("myApp", ['ngRoute']);
      app.config(function($routeProvider){
        $routeProvider
          .when('/', {
            templateUrl: 'partials/insult.html',
            controller: 'insultController'
          })
          .otherwise({
            redirect: '/'
          })
      });
