(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    var MobileServiceClient = WindowsAzure.MobileServiceClient;
    var client = new MobileServiceClient('https://heartless-flowerpot.azure-mobile.net/', 'uMVvtMMmVrnXslCzyVTJouINhbjKOA64');

    var agentTable = client.getTable('agent');

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