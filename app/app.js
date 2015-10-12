'use strict';

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
        .when('/nodes/:node_id', {
          templateUrl: 'app/templates/tasks.html',
          controller: 'TasksController'
        })
        .when('/nodes', {
          templateUrl: 'app/templates/nodes.html',
          controller: 'NodesController'
        })
        .otherwise({
          redirectTo: '/login'
        });
    }
  ])
  .controller('LoginController', function($scope, $http, $location) {
    $scope.login = function () {
      fetch('https://rest-sifoni-anhnt0212.c9.io/api/v1/login', {
          method: 'post',
          body: JSON.stringify({
            email: $scope.email,
            password: $scope.password
          })
      }).then(function(response) {
          return response.json();
      }).then(function(data) {
          if ('token' in data) {
            window.localStorage.setItem('token', data.token);
            $location.path("/nodes");
          } else {
            alert('Login fail !');
          }
      }).catch(function(err) {
         alert('Login fail !');
      });
    }
  })
  .controller('NodesController', function($scope, $http) {
    $scope.notes = [];

    $scope.loadNodes = function () {
      fetch('https://rest-sifoni-anhnt0212.c9.io/api/v1/me/note', {
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
          }
      }).then(function(response) {
          return response.json();
      }).then(function(data) {
          $scope.notes = data;
          $scope.$apply();
      }).catch(function(err) {
         alert('Load notes fail!');
      });
    }

    $scope.loadNodes();
  })
  .controller('TasksController', function($scope, $http, $routeParams) {
    $scope.tasks = [];

    $scope.showTasks = function () {
      fetch('https://rest-sifoni-anhnt0212.c9.io/api/v1/me/note/' + $routeParams.node_id, {
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
          }
      }).then(function(response) {
          return response.json();
      }).then(function(data) {
          $scope.tasks = data;
          $scope.$apply();
      }).catch(function(err) {
         alert('Load tasks fail!');
      });
    }
    $scope.showTasks();
  })
  .controller('RegisterController', function($scope, $html, $location) {
    fetch('https://rest-sifoni-anhnt0212.c9.io/api/v1/register', {
          method: 'post',
          body: JSON.stringify({
            username: $scope.username,
            email: $scope.email,
            password: $scope.password
          })
      }).then(function(response) {
          return response.json();
      }).then(function(data) {
          if ('token' in data) {
            window.localStorage.setItem('token', data.token);
            $location.path("/nodes");
          } else {
            alert('Register fail !');
          }
      }).catch(function(err) {
         alert('Register fail !');
      });
  });