(function(){
	angular
		.module('iBook.common')
		.factory('bookService', bookService);

	bookService.$inject = ['dbService'];

	function bookService(dbService) {
		var self = this;

		self.all = function() {
			return dbService.query("SELECT id, title, image, publisher, author, isbn, summary FROM iBook")
				.then(function(result){
					return dbService.getAll(result);
				});
		};

		self.get = function(memberId) {
			var parameters = [memberId];
			return dbService.query("SELECT id, title, image, publisher, author, isbn, summary FROM iBook WHERE id = (?)", parameters)
				.then(function(result) {
					return dbService.getById(result);
				});
		};

		self.add = function(member) {
			var parameters = [member.id, member.title, member.image, member.publisher, member.author, member.isbn, member.summary];
			return dbService.query("INSERT INTO iBook (id, title, image, publisher, author, isbn, summary) VALUES (?,?,?,?,?,?,?)", parameters);
		};

		self.remove = function(member) {
			var parameters = [member.id];
			return dbService.query("DELETE FROM iBook WHERE id = (?)", parameters);
		};

		self.update = function(origMember, editMember) {
			var parameters = [editMember.id, editMember.title, origMember.id];
			return dbService.query("UPDATE iBook SET id = (?), title = (?) WHERE id = (?)", parameters);
		};

		return self;
	}
})();