(function() {
    'use strict';

    angular
        .module('app')
        .controller('aAccountController', aAccountController);

    aAccountController.$inject = ['dependencies'];


    /* @ngInject */
    function aAccountController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        vm.message = "hello SHitty name aAccountController";

        activate();

        ////////////////

        function activate() {}
    }
})();
