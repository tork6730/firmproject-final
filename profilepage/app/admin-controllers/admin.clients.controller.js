(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminClientsController', adminClientsController);

    adminClientsController.$inject = ['dependencies'];


    /* @ngInject */
    function adminClientsController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
