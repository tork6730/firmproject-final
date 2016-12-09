(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise("/client/client_home");

        $urlRouterProvider.otherwise("/attorney/attorney_home");



        // $urlRouterProvider.otherwise("/admin/admin_home");




    //controller: 'aProfileController as vm',

        // Admin states

    // $stateProvider
        // .state('admin', {
        //     url: '/admin',
        //     templateUrl: '/profile/admin-partials/admin.html'
        // })
        // .state('admin.home', {
        //     url: '/admin_home',
        //     templateUrl: '/profile/admin-partials/admin.home.html',
        //     controller: 'adminProfileController as vm',
        //     data: { activeTab: 'home' }
        // })
        // .state('admin.account', {
        //     url: '/admin_account',
        //     templateUrl: '/profile/admin-partials/admin.account.html',
        //     controller: 'adminAccountController as vm',
        //     data: { activeTab: 'account' }
        // })
        // .state('admin.documents', {
        //     url: '/admin_documents',
        //     templateUrl: '/profile/admin-partials/admin.documents.html',
        //     controller: 'adminDocumentsController as vm',
        //     data: { activeTab: 'documents' }
        // })
        // .state('admin.cases', {
        //     url: '/admin_cases',
        //     templateUrl: '/profile/admin-partials/admin.cases.html',
        //     controller: 'adminCasesController as vm',
        //     data: { activeTab: 'cases' }
        // })
        // .state('admin.clients', {
        //     url: '/admin_clients',
        //     templateUrl: '/profile/admin-partials/admin.clients.html',
        //     controller: 'adminClientsController as vm',
        //     data: { activeTab: 'clients' }
        // })
        // .state('admin.profile', {
        //     url: '/admin_profile',
        //     templateUrl: '/profile/admin-partials/admin.profile.html',
        //     controller: 'adminProfileController as vm',
        //     data: { activeTab: 'profile' }
        // })
        // .state('admin.attorneys', {
        //     url: '/admin_attorneys',
        //     templateUrl: '/profile/admin-partials/admin.attorneys.html',
        //     controller: 'adminAttorneyController as vm',
        //     data: { activeTab: 'attorneys' }
        // });

        // client states

        // $stateProvider
        //     .state('client', {
        //         url: '/client',
        //         templateUrl: '/profile/client-partials/client.html'
        //     })
        //     .state('client.home', {
        //         url: '/client_home',
        //         templateUrl: '/profile/client-partials/client.home.html',
        //         controller: 'cProfileController as vm',
        //         data: { activeTab: 'home' }
        //     })
        //     .state('client.account', {
        //         url: '/client_account',
        //         templateUrl: '/profile/client-partials/client.account.html',
        //         controller: 'cAccountController as vm',
        //         data: { activeTab: 'account' }
        //     })
        //     .state('client.documents', {
        //         url: '/client_documents',
        //         templateUrl: '/profile/client-partials/client.documents.html',
        //         controller: 'cDocumentsController as vm',
        //         data: { activeTab: 'documents' }
        //     })
        //     .state('client.cases', {
        //         url: '/client_cases',
        //         templateUrl: '/profile/client-partials/client.cases.html',
        //         controller: 'cCasesController as vm',
        //         data: { activeTab: 'cases' }
        //     });

        // Attorney states

        $stateProvider
            .state('attorney', {
                url: '/attorney',
                templateUrl: '/profile/attorney-partials/attorney.html'
            })
            .state('attorney.home', {
                url: '/attorney_home',
                templateUrl: '/profile/attorney-partials/attorney.home.html',
                controller: 'aProfileController as vm',
                data: { activeTab: 'home' }
            })
            .state('attorney.clients', {
                url: '/attorney_clients',
                templateUrl: '/profile/attorney-partials/attorney.clients.html',
                controller: 'aClientsController as vm',
                data: { activeTab: 'clients' }
            })
            .state('attorney.cases', {
                url: '/attorney_cases',
                templateUrl: '/profile/attorney-partials/attorney.cases.html',
                controller: 'aCasesController as vm',
                data: { activeTab: 'cases' }
            })
            .state('attorney.documents', {
                url: '/attorney_documents',
                templateUrl: '/profile/attorney-partials/attorney.documents.html',
                controller: 'aDocumentsController as vm',
                data: { activeTab: 'documents' }
            });
            // .state('attorney.account', {
            //     url: '/attorney_account',
            //     templateUrl: '/profile/attorney-partials/attorney.account.html',
            //     controller: 'aAccountController as vm',
            //     data: { activeTab: 'account' }
            // });
            // .state('attorney.documents', {
            //     url: '/attorney_documents',
            //     templateUrl: '/profile/attorney-partials/attorney.documents.html',
            //     controller: 'aDocumentsController as vm',
            //     data: { activeTab: 'documents' }
            // })
            // .state('attorney.documents.templates', {
            //     url: '/attorney_documents_templates',
            //     templateUrl: '/profile/attorney-partials/attorney.documents.templates.html',
            //     controller: 'aDocumentsController as vm',
            //
            // })
            // .state('attorney.cases', {
            //     url: '/attorney_cases',
            //     templateUrl: '/profile/attorney-partials/attorney.cases.html',
            //     controller: 'aCasesController as vm',
            //     data: { activeTab: 'cases' }
            // })

    });
})();
