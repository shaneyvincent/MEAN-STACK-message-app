export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('auth', {
      url: '/auth',
      templateUrl: 'src/app/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    });



  $urlRouterProvider.otherwise('/');
}
