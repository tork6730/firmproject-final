(function() {
    'use strict';

    angular
        .module('app')
        .controller('aHomeController', aHomeController);


    aHomeController.$inject = ['dependencies'];





    /* @ngInject */
    function aHomeController(dependencies) {
        var vm = this;
        vm.title = 'Controller';
        vm.name = 'hadjir';

        activate();

        ////////////////

        function activate() {}
    }
})();
