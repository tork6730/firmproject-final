(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminCasesController', adminCasesController);

    adminCasesController.$inject = ['dependencies'];


    /* @ngInject */
    function adminCasesController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
