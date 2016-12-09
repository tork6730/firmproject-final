(function() {
    'use strict';

    angular
        .module('app')
        .controller('cProfileController', cProfileController);


    cProfileController.$inject = ['dependencies'];

    /* @ngInject */
    function cProfileController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
