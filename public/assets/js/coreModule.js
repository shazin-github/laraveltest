/**
 * Created by shazin on 10/29/18.
 */

define( ['angular-route'], function() {
    var coreModule = angular.module('coreModule', ['ngRoute'], function($interpolateProvider) {
            $interpolateProvider.startSymbol('<%');
            $interpolateProvider.endSymbol('%>');
        }
    );
    coreModule.config(['$routeProvider','$locationProvider',
        function ($routeProvider , $locationProvider) {
            //Routes
        }]);
    require(['controllers/controllerReference'], function(controllerReference) {
        require(controllerReference, function() {
            angular.bootstrap(document, ['coreModule']);
        });
    });
});