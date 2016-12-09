(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminAccountController', adminAccountController);

    adminAccountController.$inject = ['dependencies'];


    /* @ngInject */
    function adminAccountController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
