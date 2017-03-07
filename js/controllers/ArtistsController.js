(function(){
  angular.module('spotifyApp').
    controller('ArtistsController', ArtistsController)

    function ArtistsController($scope){
      var vm = this;

      $scope.$on('artistsDataReady', function(event,artists){
        vm.artists= artists;
        vm.artists.unshift({ name: 'Select an artists....'})
      })
    }
})()
