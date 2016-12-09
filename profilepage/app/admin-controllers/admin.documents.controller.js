(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminDocumentsController', adminDocumentsController);


    adminDocumentsController.$inject = ['dependencies'];




    /* @ngInject */
    function adminDocumentsController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
