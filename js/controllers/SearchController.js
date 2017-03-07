(function () {
  angular.module('spotifyApp')
    .controller('SearchController', SearchController)

  function SearchController (SpotifyFactory) {
    var vm = this
    vm.searchArtist = function (e) {
      e.preventDefault()
      SpotifyFactory.searchArtist(vm.search)
    }
  }
})()
