angular.module('todolist', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'app/templates/login.html',
          controller: 'LoginController'
        })
        .when('/register', {
          templateUrl: 'app/templates/register.html',
          controller: 'RegisterController'
        })
        .when('/forgot', {
          templateUrl: 'app/templates/forgot.html',
          controller: 'ForgotController'
        })
        .when('/tasks', {
          templateUrl: 'app/templates/tasks.html',
          controller: 'TasksController'
        })
        .otherwise({
          redirectTo: '/login'
        });
    }
  ])
  .controller('TasksController', function($scope) {
    
  });;