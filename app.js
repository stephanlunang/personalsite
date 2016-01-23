if (Meteor.isClient) { 
  angular.module('StephansSite', ['angular-meteor','ui.router']);

  angular.module('StephansSite').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html'
      })
      .state('CV', {
        url: '/CV',
        templateUrl: 'cv.html'
      })
      .state('HobbiesAndInterests', {
        url: '/HobbiesAndInterests',
        templateUrl: 'HobbiesAndInterests.html'
      })
      .state('Contact', {
        url: '/Contact',
        templateUrl: 'contact.html'
      });

    $urlRouterProvider.otherwise("/home");
  });

}