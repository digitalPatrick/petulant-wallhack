(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    //Backendless: defaults
    var APPLICATION_ID = 'B1E2B7F5-5160-2433-FF83-A3DF803D2300';
    var SECRET_KEY = 'CFB986E3-5832-00D5-FF4C-55E42E28A700'; //rest secrectkey
    var VERSION = 'v1';

    if (!APPLICATION_ID || !SECRET_KEY || !VERSION)
        alert("Missing application ID and secret key arguments. Login to Backendless Console, select your app and get the ID and key from the Manage > App Settings screen. Copy/paste the values into the Backendless.initApp call located in UserExample.js");
    init();
    function init() {
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    }


    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }
    }
})();