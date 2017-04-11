angular.module('easyshopping').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                // For any unmatched url, send to /business
                $urlRouterProvider.otherwise("/login")
                 
                $stateProvider
                        .state('test', {//State demonstrating Nested views
                            url: "/test",
                            templateUrl: "test",
                            controller: "testCtrl"
                        })
                        .state('login', {
                          url: '/login',
                          templateUrl: 'landingPage',
                          controller: 'AuthCtrl',
                          onEnter: ['$state', 'auth', function($state, auth){
                            if(auth.isLoggedIn()){
                              $state.go('test');
                            }
                          }]
                        })
                        .state('register', {
                          url: '/register',
                          templateUrl: 'register',
                          controller: 'AuthCtrl',
                          onEnter: ['$state', 'auth', function($state, auth){
                            if(auth.isLoggedIn()){
                              $state.go('test');
                            }
                          }]
                        });

            }]);