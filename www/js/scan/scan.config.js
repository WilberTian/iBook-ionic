(function(){
	angular
		.module('iBook.scan')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
	    $stateProvider
		    .state('tab.scan', {
				url: '/scan',
				views: {
					'tab-scan': {
				  		templateUrl: 'js/scan/tab-scan.html',
				  		controller: 'ScanController'
					}
				}
		    })
	}

})();