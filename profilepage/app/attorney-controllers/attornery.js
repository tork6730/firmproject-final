


(function() {
    'use strict';

    var Messages = new function()
    {
        this.DEFAULT_CONTROLLER_MESSAGE = "Need to implement controller";
    };


    Object.freeze(Messages);

    angular
        .module('app')
        .controller('aCasesController', aCasesController)
        .controller('aClientsController', aClientsController)
        .controller('aDocumentsController', aDocumentsController)
        .factory('AttorneyCaseService', AttorneyCaseService);

    // aClientsController.$inject = ['dependencies'];


    function AttorneyCaseService( $rootScope, $http )
    {
        // this is my case service

        this.requestCaseInformation = function()
        {
            // $http.get('/api/attorney/cases').success( function( data )
            // {
            //     $rootScope.$broadcast('casesReceived', data);
            // })
            // .error( function( data )
            // {
            //     // handle any errors, maybe broadcase an error on request message, so controllers can notify
            //     //      the view of possible alternatives
            // });

        };

        return this;
    }


    // TODO:
    // TODO:  need to implement
    // TODO:

    /* @ngInject */
    function aCasesController( $scope, AttorneyCaseService)
    {
        var vm = this;
        vm.title = 'Controller';
        vm.message = Messages.DEFAULT_CONTROLLER_MESSAGE;

        vm.cases = [];


        $scope.$on('casesReceived', function( msg, data )
        {
            // if not need to deep copy and sort data received.  do not sort this array, it can be passed to other
            //      controllers and you may mess with their object reference
            vm.cases = data;
        });

        AttorneyCaseService.requestCaseInformation();

    }

    // TODO:
    // TODO:    Need to implement aClientsController
    // TODO:

    /* @ngInject */
    function aClientsController()
    {
        var vm = this;
        vm.title = 'Controller';

        vm.message = Messages.DEFAULT_CONTROLLER_MESSAGE;

    }

    // aCasesController.$inject = ['dependencies'];



    // TODO:
    // TODO:  need to implement
    // TODO:


    /* @ngInject */
    function aDocumentsController($http)
    {
    // function aDocumentsController($http, mainFactory) {
        var vm = this;

        vm.message = Messages.DEFAULT_CONTROLLER_MESSAGE;

        // mainFactory.getDocuments('58476511e7f7b7bb495923a2').then(
        //
        //     function(response) {
        //
        //         // bind categories to the view
        //         vm.documents = response;
        //
        //
        //
        //         console.log(response);
        //
        //         // get all the Roles that exist in the origin.API DB
        //         // getRoles();
        //
        //     },
        //
        //     function(error) {
        //
        //         console.log(error);
        //
        //     });


    }


})();