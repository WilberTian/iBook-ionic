(function(){
    angular
        .module('iBook.common')
        .factory('tagService', tagService);

    tagService.$inject = ['dbService'];

    function tagService(dbService) {
        var self = this;

        self.all = function() {
            return dbService.query("SELECT id, title FROM tags")
                .then(function(result){
                    return dbService.getAll(result);
                });
        };

        self.get = function(tagId) {
            var parameters = [tagId];
            return dbService.query("SELECT id, title FROM tags WHERE id = (?)", parameters)
                .then(function(result) {
                    return dbService.getById(result);
                });
        };

        self.add = function(tag) {
            var parameters = [null, tag.title];
            return dbService.query("INSERT INTO tags (id, title) VALUES (?,?)", parameters);
        };

        self.remove = function(tag) {
            var parameters = [tag.id];
            return dbService.query("DELETE FROM tags WHERE id = (?)", parameters);
        };

        self.update = function(tag) {
            var parameters = [tag.title, tag.id];
            return dbService.query("UPDATE tags SET title = (?) WHERE id = (?)", parameters);
        };

        return self;
    }
})();