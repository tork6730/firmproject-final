(function() {
    'use strict';

    angular
        .module('app')
        .controller('cAccountController', cAccountController);

    cAccountController.$inject = ['dependencies'];

    /* @ngInject */
    function cAccountController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
