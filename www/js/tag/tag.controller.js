(function(){
    angular
        .module('iBook.tag')
        .controller('TagController', TagController);

    TagController.$inject = ['$scope', '$ionicModal', '$ionicPopup', 'tagService', 'tagListData'];

    function TagController($scope, $ionicModal, $ionicPopup, tagService, tagListData) {
        var vm = this;

        vm.tagList = tagListData;

        vm.getTagList = _getTagList;
        vm.createTag = _createTag;
        vm.updateTag = _updateTag;
        vm.deleteTag = _deleteTag;

        vm.openTagCreateModal = _openTagCreateModal;
        vm.cancelTagCreateModal = _cancelTagCreateModal;

        vm.openTagEditModal = _openTagEditModal;
        vm.cancelTagEditModal = _cancelTagEditModal;
 
        // init tag modal
        $ionicModal.fromTemplateUrl('tag-create-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.tagCreateModal = modal;
        });

        $ionicModal.fromTemplateUrl('tag-edit-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.tagEditModal = modal;
        });

        function _getTagList() {
            tagService.all().then(function(data){
                vm.tagList = data;
                $scope.$broadcast('scroll.refreshComplete');
            }, function(error) {
                $scope.$broadcast('scroll.refreshComplete');
                alert(error);
            });
        }

        function _createTag(tag) {
            tagService.add(tag).then(function(){
                vm.cancelTagCreateModal();
                vm.getTagList()
            });
            
        }

        function _updateTag(tag) {
            tagService.update(tag).then(function(){
                vm.cancelTagEditModal();
                vm.getTagList()
            });
        }

        function _deleteTag(tag) {
            showConfirm = function(tag) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Delete tag',
                    template: 'Delete "' + tag.title + '"?' 
                });
 
                confirmPopup.then(function(res) {
                    if(res) {
                        tagService.remove({id: tag.id});
                        vm.getTagList()
                    } else {
                        console.log('You are not sure');
                    }
                });
            };

            showConfirm(tag);
        }

        function _openTagCreateModal() {
            vm.tagCreateModal.scope.tag = {};
            vm.tagCreateModal.show();
        }

        function _cancelTagCreateModal() {   
            vm.tagCreateModal.hide();
        }

        function _openTagEditModal(tag) {
            vm.tagEditModal.scope.tag = angular.copy(tag);
            vm.tagEditModal.show();
        }

        function _cancelTagEditModal() {
            vm.tagEditModal.hide();
        }

    }


})();