(function() {
    'use strict';

    angular
        .module('app')
        .controller('cHomeController', cHomeController);

    cHomeController.$inject = ['dependencies'];

    /* @ngInject */
    function cHomeController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
