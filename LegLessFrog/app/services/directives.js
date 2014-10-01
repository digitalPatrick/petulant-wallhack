(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('ccImgPerson', ['config', function (config) {
        //Usage:
        //<img data-cc-img-person="{{s.speaker.imageSource}}"/>
        var basePath = config.imageSettings.imageBasePath;
        var unknownImage = config.imageSettings.unknownPersonImageSource;
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('ccImgPerson', function(value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }]);  

    app.directive('featuredRealtors', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/home/featured-realtors.html',
            controller: 'home',
            controllerAs: 'vm'
        };
    });

    app.directive('layerSlider', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/layout/layerslider.html',
            controller: 'home',
            controllerAs: 'vm'
        };
    });

    app.directive('latestListings', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/home/latest-listings.html',
            controller: 'home',
            controllerAs: 'vm'
        };
    });

    app.directive('footerNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/layout/footer-navigation.html',
            controller: 'home',
            controllerAs: 'vm'
        };
    });

    app.directive('socialNetworks', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/layout/social-networks.html'
        }
    });

    app.directive('mainNav', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/layout/headnav.html',
            controller: 'shell',
            controllerAs: 'vm'
        }
    });

    app.directive('topNav', function () {
        return {
            restrict: 'E',
            templateUrl: '../../app/layout/topbarhead.html',
            controller: 'shell',
            controllerAs: 'vm'
        }
    });
})();