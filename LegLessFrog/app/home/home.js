(function () {
    'use strict';

    var controllerId = 'home';

    angular.module('app').controller(controllerId, ['common', home]);

    function home(common) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.activate = activate;
        vm.agents = [];
        vm.title = 'Home';

        activate();

        function activate() {
            var promises = [getAgents()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Home View'); });
        }

        function getAgents() {
            
        }

    }
})();
