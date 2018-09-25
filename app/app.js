(function(){
  angular.module('plunker', ['ui.router','ui.bootstrap','ngAnimate']).config(ConfigConfig)

    function ConfigConfig($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',   
            // controllerAs syntax to avoid using $scope in the controller 
            controller: 'Home.Ctrl as vm'
        }) 
        .state('structure', {
            url: '/structure',
            templateUrl: 'app/structure/structure.html',   
            // controllerAs syntax to avoid using $scope in the controller
            controller: 'Structure.Ctrl as vm'
        })     
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html',   
            // controllerAs syntax to avoid using $scope in the controller
            controller: 'About.Ctrl as vm'
        });
    }
})();

