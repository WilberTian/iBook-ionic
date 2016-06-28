(function(){
	angular
		.module('iBook.common')
		.factory('dbService', dbService);

	dbService.$inject = ['$cordovaSQLite', '$ionicPlatform', '$q', 'dbHandler'];

	function dbService($cordovaSQLite, $ionicPlatform, $q, dbHandler) {
		var self = this;

		self.query = function (query, parameters) {
			parameters = parameters || [];
			var q = $q.defer();
			$ionicPlatform.ready(function () {
				$cordovaSQLite.execute(dbHandler.db, query, parameters)
					.then(function (result) {
						q.resolve(result);
					}, function (error) {
						q.reject(error);
					});
			});
			return q.promise;
		};

		self.getAll = function(result) {
			var output = [];

			for (var i = 0; i < result.rows.length; i++) {
				output.push(result.rows.item(i));
			}
			return output;
		};

		self.getById = function(result) {
			return angular.copy(result.rows.item(0));
		};

		return self;
	}
})();