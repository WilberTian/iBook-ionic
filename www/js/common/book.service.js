(function(){
	angular
		.module('iBook.common')
		.factory('bookService', bookService);

	bookService.$inject = ['dbService'];

	function bookService(dbService) {
		var self = this;

		self.all = function(tag) {
			tag = tag || '';

			var condition = '';
			if(tag !== '') {
				condition = "WHERE tags LIKE '%"+tag+"%'";
			}
			return dbService.query("SELECT id, title, image, publisher, author, isbn, summary, tags FROM books " + condition)
				.then(function(result){
					return dbService.getAll(result);
				});
		};

		self.get = function(memberId) {
			var parameters = [memberId];
			return dbService.query("SELECT id, title, image, publisher, author, isbn, summary, tags FROM books WHERE id = (?)", parameters)
				.then(function(result) {
					return dbService.getById(result);
				});
		};

		self.add = function(member) {
			var parameters = [member.id, member.title, member.image, member.publisher, member.author, member.isbn, member.summary, member.tags];
			return dbService.query("INSERT INTO books (id, title, image, publisher, author, isbn, summary, tags) VALUES (?,?,?,?,?,?,?,?)", parameters);
		};

		self.remove = function(member) {
			var parameters = [member.id];
			return dbService.query("DELETE FROM books WHERE id = (?)", parameters);
		};

		self.update = function(member) {
			var parameters = [member.tags, member.id];
			return dbService.query("UPDATE books SET tags = (?) WHERE id = (?)", parameters);
		};

		return self;
	}
})();