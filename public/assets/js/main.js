/**
 * Created by shazin on 10/29/18.
 */
require.config({
    paths: {
        'domReady': 'assets/bower_components/domReady/domReady',
        'angular': 'assets/bower_components/angular/angular',
        'angular-csp': 'assets/bower_components/angular/angular-csp',
        'angular-route': 'assets/bower_components/angular-route/angular-route',
        'coreModule': 'coreModule'
    },

    shim: {
        'angular': {
            deps: ['domReady']
        },

        'angular-route': {
            deps: ['angular']
        },

        'coreModule': {
            deps: ['angular']
        }
    }
});

require(['coreModule']);