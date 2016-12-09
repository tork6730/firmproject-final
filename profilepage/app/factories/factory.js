(function() {
    'use strict';

    angular
        .module('app')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function mainFactory($http, $q) {
        var service = {

            // getCategories: getCategories,
            // getCategoryNamesByRoleId: getCategoryNamesByRoleId,
            // getContentByCategoryId: getContentByCategoryId,
            // getContentByContentId: getContentByContentId,
            // getRoles: getRoles,
            // getUsers: getUsers,
            getDocuments: getDocuments,
            // postCategory: postCategory,
            // postContent: postContent,
            // postContentCategory: postContentCategory,

            // edit: edit



        };
        return service;

        ////////////////

        // get functions

        function getDocuments(id) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:3001/api/files/' + id
            })

            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response);
                    }
                },
                function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        }

        // function getCategories() {
        //     var defer = $q.defer();

        //     $http({
        //         method: 'GET',
        //         url: ? +'catagory/'
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function getCategoryNamesByRoleId(roleIds) {
        //     var defer = $q.defer();

        //     $http({
        //         method: 'GET',
        //         url: ? +'catagorynamesbyroleid/' + roleIds
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function getContentByCatagoryId(categoryId) {
        //     var defer = $q.defer();

        //     $http({
        //         method: 'GET',
        //         url: ? +'contentbycatagoryid/' + categoryIds
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function getContentByContentId(contentId) {
        //     var defer = $q.defer();

        //     $http({
        //         method: 'GET',
        //         url: ? +'content/' + contentIds
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function getRoles() {
        //     var defer = $q.defer();
        //     var token = storageFactory.getLocalStorage('userSession').token;

        //     $http({
        //         method: 'GET',
        //         url: ? +'api/roles',
        //         headers: {
        //             'Authorization': 'Bearer ' + token
        //         }
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 storageFactory.setLocalStorage('roles', response.data);
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function getUsers() {
        //     var defer = $q.defer();
        //     var token = storageFactory.getLocalStorage('userSession').token;

        //     $http({
        //         method: 'GET',
        //         url: ? +'api/users',
        //         headers: {
        //             'Authorization': 'Bearer ' + token
        //         }
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 storageFactory.setLocalStorage('users', response.data);
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }


        // // post functions


        // function postCategory(catName) {
        //     var defer = $q.defer();

        //     $http({
        //         method: 'POST',
        //         url: ? +'category'
        //         data: info,
        //         header: {
        //             'Content-Type': '?'
        //         }
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function postContent(title, body) {
        //     var defer = $q.defer();
        //     var userName = storageFactory.getLocalStorage('userSession').user.userName;
        //     var info = 'title=' + title + '&bodyDescr=' + body + '&createdBy=' + userName;

        //     $http({
        //         method: 'POST',
        //         url: ? +'content'
        //         data: info,
        //         header: {
        //             'Content-Type': '?'
        //         }
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }

        // function postContentCategory(categories, contentId) {
        //     var defer = $q.defer();

        //     var info = 'contentId=' + contentId + '&categoryId=' + categories;

        //     $http({
        //         method: 'POST',
        //         url: ? +'contentcategory',
        //         data: info,
        //         header: {
        //             'Content-Type': '?'
        //         }
        //     })

        //     .then(function(response) {
        //             if (typeof response.data === "object") {
        //                 defer.resolve(response.data);
        //             } else {
        //                 defer.reject(response);
        //             }
        //         },
        //         function(error) {
        //             defer.reject(error);
        //         });
        //     return defer.promise;
        // }


    }
})();
