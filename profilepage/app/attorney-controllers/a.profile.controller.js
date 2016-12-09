(function() {
    'use strict';

    angular
        .module('app')
        .controller('aProfileController',aProfileController)
        .factory( 'AttorneyImageService', AttorneyImageService);

        // .controller('aProfileController', aProfileController);


    function AttorneyImageService( $http, $rootScope )
    {

        this.retrieveImageInfo = function()
        {
            $http.get('http://localhost:3001/api/attorneyImages').success( function( data )
            {
                $rootScope.$broadcast('jpgsReceived',  data);
                console.log("received data : " + JSON.stringify( data ) );
            })
            .error( function( data )
            {
                console.log('Error Received : ' + JSON.stringify( data ) );
            });

            console.log('still processing while getting image data');

            for( var i = 0; i < 10; i++ )
            {
                console.log( "count : " + i );
            }

        };

        return this;
    }



    // aProfileController.$inject = ['dependencies'];


    /* @ngInject */
    function aProfileController( $http, $scope, AttorneyImageService ) {
        var vm = this;
        vm.title = 'Controller';
        vm.name = 'Awesomeness!!!';

        vm.imageValues = [];

        // $http.get('http://localhost:3001/api/attorneyImages').success( function( data )
        // {
        //     vm.imageValues = data;
        //     console.log("received data : " + JSON.stringify( data ) );
        // })
        // .error( function( data )
        // {
        //     console.log('Error Received : ' + JSON.stringify( data ) );
        // });

        AttorneyImageService.retrieveImageInfo();

        $scope.$on('jpgsReceived', function( msg, data )
        {
            vm.imageValues = data;
        });


        activate();

        ////////////////

        function activate() {}

    }
})();
