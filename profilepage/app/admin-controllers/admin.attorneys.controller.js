(function() {
    'use strict';

    // var attorneyApp = angular.module('app', ['dependencies']);


    angular.module('app')
           // .controller('adminAttorneyController', adminAttorneyController);
        .controller('adminAttorneyController', []);
    // attorneyApp.controller( 'adminAttorneyController', function( $scope, dependencies )
    // {
    //     $scope.name = 'buttkiss';
    //     activate();
    // });

    // var injector = angular.injector(['ng', 'app']);
    // var dependencies = injector.get('dependencies');

    // adminAttorneyController.$inject(['$scope']) ;
    // adminAttorneyController.$inject = ['dependencies'] ;

    /* @ngInject */
    function adminAttorneyController() {
        var vm = this;
        vm.title = 'Controller';



        activate();

        ////////////////

        function activate() {}
    }
})();
