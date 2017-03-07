(function () {
  angular.module('spotifyApp')
    .constant('urlSearchArtists', 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>')
})()
