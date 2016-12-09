(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminProfileController', adminProfileController);


    adminProfileController.$inject = ['dependencies'];




    /* @ngInject */
    function adminProfileController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
