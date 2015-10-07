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
  .controller('LoginController', function($scope) {
    // $scope.flash = 'Hello world! I am Tweedy bird.';
    // $scope.img = 'http://img2.wikia.nocookie.net/__cb20121120221843/scratchpad/images/thumb/5/54/Tweety.gif/180px-Tweety.gif';
  })
  .controller('RegisterController', function($scope) {
    // $scope.flash = 'This is about page, hihi!';
  })
  .controller('TasksController', function($scope) {
    // $scope.flash = 'This is about page, hihi!';
  })
  .controller('ForgotController', function($scope) {
    // $scope.flash = 'Contact with us at here!';
  });