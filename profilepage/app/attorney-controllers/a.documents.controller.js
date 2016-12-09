(function() {
    'use strict';

    angular
        .module('app')
        .controller('aDocumentsController', aDocumentsController);


    aDocumentsController.$inject = ['$http', 'mainFactory'];




    /* @ngInject */
    function aDocumentsController($http, mainFactory) {
        var vm = this;

        // activate();


        mainFactory.getDocuments('58476511e7f7b7bb495923a2').then(

            function(response) {

                // bind categories to the view
                vm.documents = response;

                console.log(response);

                // get all the Roles that exist in the origin.API DB
                // getRoles();

            },

            function(error) {

                console.log(error);

            });


    }



    ////////////////


})();
