(function(){
	angular
		.module('iBook')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

	function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	    $ionicConfigProvider.tabs.position('bottom');
	    
	    // Ionic uses AngularUI Router which uses the concept of states
	    // Learn more here: https://github.com/angular-ui/ui-router
	    // Set up the various states which the app can be in.
	    // Each state's controller can be found in controllers.js
	    $stateProvider
		    .state('tab', {
		      	url: '/tab',
		      	abstract: true,
		      	templateUrl: 'js/tabs.html'
		    })
		    
	    // if none of the above states are matched, use this as the fallback
	    $urlRouterProvider.otherwise('/tab/books');

	}

})();