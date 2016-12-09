(function() {
    'use strict';

    angular
        .module('app')
        .controller('cCasesController', cCasesController);

    cCasesController.$inject = ['dependencies'];

    /* @ngInject */
    function cCasesController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
