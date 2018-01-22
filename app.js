(function(){
  angular.module('plunker', ['ui.router','ui.bootstrap','ngAnimate']).config(ConfigConfig)

    function ConfigConfig($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
         .state('home', {
            url: '/home',
            templateUrl: 'home.html',           
            controller: 'Home.Ctrl'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'about.html',           
            controller: 'About.Ctrl'
        });
    }
})();

