(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/index.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            })
            .state('clients', {
                url: '/clients',
                templateUrl: 'clients/index.html',
                controller: 'Clients.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'clients' }
            })
             .state('documents', {
                url: '/documents',
                 templateUrl: 'documents/index.html',
                 controller: 'Documents.IndexController',
                 controllerAs: 'vm',
                data: { activeTab: 'documents' }
            })
            .state('cases', {
                url: '/cases',
                templateUrl: 'cases/index.html',
                controller: 'Cases.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'cases'}
            })
            .state('account', {
                url: '/account',
                templateUrl: 'account/index.html',
                controller: 'Account.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'account' }
            });
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            // implement angular-local-storage and push into local storage here instead of just this window.jwtToken thing
            window.jwtToken = token;    

            angular.bootstrap(document, ['app']);

        });
    });
})();