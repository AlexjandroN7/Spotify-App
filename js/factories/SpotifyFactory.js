(function () {
  angular.module('spotifyApp')
    .factory('SpotifyFactory', function ($http, $rootScope, urlSearchArtists) {
      function searchArtist (searchQuery) {
        var url = urlSearchArtists
        url = url.replace('<%ARTIST-NAME%>', searchQuery)

        return $http.get(url)
                .then(function (response) {
                  return response.data.artists.items
                })
                .then(function (artists) {
                  $rootScope.$broadcast('artistsDataReady', artists, searchQuery)
                })
      }

      function searchAlbums () {}

      return {
        searchArtist: searchArtist,

      
      }
    })
})()
