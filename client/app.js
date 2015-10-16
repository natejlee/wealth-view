var app = angular.module('WealthView', [])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('blue-grey');
  })
  .controller('wealthController', ['$scope', function($scope){

  }]);

app.config(function ($stateProvider, $urlRouterProvider){
  
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html'
  });

  $urlRouterProvider.otherwise('home');
})