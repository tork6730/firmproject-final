(function() {
    'use strict';

    angular
        .module('app')
        .controller('cDocumentsController', cDocumentsController);

    cDocumentsController.$inject = ['dependencies'];

    /* @ngInject */
    function cDocumentsController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
