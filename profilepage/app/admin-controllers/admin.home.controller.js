(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminHomeController', adminHomeController);


    adminHomeController.$inject = ['dependencies'];





    /* @ngInject */
    function adminHomeController(dependencies) {
        var vm = this;
        vm.title = 'Controller';



        activate();

        ////////////////

        function activate() {}
    }
})();
