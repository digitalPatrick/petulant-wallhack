(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, $locationProvider, routes) {
        $locationProvider.html5Mode(true);

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/home/home.html',
                    title: 'home',
                    settings: {
                        nav: 1,
                        display: 'Home',
                        content: 'Welcome'
                    }
                }
            }, {
                url: '/privacy',
                config: {
                    title: 'privacy',
                    templateUrl: 'app/privacy/page-privacy.html',
                    settings: {
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
    }
})();