(function () {
    'use strict';

    var controllerId = 'home';

    angular.module('app').controller(controllerId, ['common', 'angularLoad', home]);

    function home(common, angularLoad) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.activate = activate;
        vm.agents = [];
        vm.title = 'Home';

        angularLoad.loadScript('Scripts/scripts.js');
        //angularLoad.loadCSS('Content/animate.css');
        activate();

        function activate() {
            var promises = [getAgents()];
            common.activateController(promises, controllerId);
        }

        function getAgents() {
            
        }

    }
})();
