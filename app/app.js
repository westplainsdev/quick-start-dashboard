(function(){
  angular.module('plunker', ['ui.router','ui.bootstrap','ngAnimate']).config(ConfigConfig)

    function ConfigConfig($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
         .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',           
            controller: 'Home.Ctrl'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html',           
            controller: 'About.Ctrl'
        });
    }
})();

