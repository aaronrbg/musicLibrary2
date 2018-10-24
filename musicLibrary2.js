var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"},
            t04: { id: "t04",
                   name: "Four Thirty-Four",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
                    for (var p in this.playlists) {
                      var ID = this.playlists[p].id;
                      var Name = this.playlists[p].name;
                      var trackCount = this.playlists[p].tracks.length;
                      console.log(ID + ": " + Name + " - " + trackCount + " tracks");
                    }
                  },
  printTracks: function () {
                    for (var t in this.tracks) {
                      var ID = this.tracks[t].id;
                      var name = this.tracks[t].name;
                      var artist = this.tracks[t].artist;
                      var album = this.tracks[t].album;
                      console.log(ID + ": " + name + " by " + artist + " (" + album + ")");
                    }
                  },
  printPlaylist: function (playlistId) {
                      var playlistID = this.playlists[playlistId].id;
                      var playlistName = this.playlists[playlistId].name;
                      var playlisttrackCount = this.playlists[playlistId].tracks.length;
                      console.log(playlistID + ": " + playlistName + " - " + playlisttrackCount + " tracks");
                      var trackList = this.playlists[playlistId].tracks;
                      for (var t in trackList) {
                        var ID = this.tracks[trackList[t]].id;
                        var name = this.tracks[trackList[t]].name;
                        var artist = this.tracks[trackList[t]].artist;
                        var album = this.tracks[trackList[t]].album;
                        console.log(ID + ": " + name + " by " + artist + " (" + album + ")");
                      }
                    },
  addTrackToPlaylist: function (trackId, playlistId) {
                      this.playlists[playlistId].tracks.push(trackId);
                  },
  uid: function(type) {
                      if (type === 'track') {
                        var numberOfTracks = 0;
                        for (var k in this.tracks) {
                          if (this.tracks.hasOwnProperty(k)) {
                          ++numberOfTracks;
                          }
                        }
                        trackId = "t0" + (numberOfTracks + 1);
                        return trackId;
                      } else if (type === 'playlist') {
                          var numberOfPlaylists = 0;
                          for (var j in this.playlists) {
                            if (this.playlists.hasOwnProperty(j)) {
                            ++numberOfPlaylists;
                            }
                          }
                          playlistId = "p0" + (numberOfPlaylists + 1);
                          return playlistId;
                      }
                      // return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                  },
  addTrack: function (name, artist, album) {
                      newId = this.uid('track');
                      this.tracks[newId] = { 'id': newId, 'name': name, 'artist': artist, 'album': album};
                  },
  addPlaylist: function (name) {
                      newId = this.uid('playlist');
                      this.playlists[newId] = { 'id': newId, 'name': name, 'tracks': []};
                  },

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {
                      var results = [];
                      for (var i in this.tracks) {
                        if (this.tracks[i].name.search(query) !== -1 && results.indexOf(this.tracks[i].id) === -1) {
                          results.push(this.tracks[i].id);
                        }
                        if (this.tracks[i].artist.search(query) !== -1 && results.indexOf(this.tracks[i].id) === -1) {
                          results.push(this.tracks[i].id);
                        }
                        if (this.tracks[i].album.search(query) !== -1 && results.indexOf(this.tracks[i].id) === -1) {
                          results.push(this.tracks[i].id);
                        }
                      }
                      console.log("The following tracks contain \"" + query + "\" : " + results);
                  }
};

// library.printPlaylists();
// library.printTracks();
// library.printPlaylist('p01');
// library.addTrackToPlaylist('t03', 'p01');
// library.addTrack('africa', 'toto', 'dont know');
// library.addPlaylist('Joshs Playlist');
// library.printSearchResults('');

library.printSearchResults('John Cage');
library.printSearchResults('Woodstock');
library.printSearchResults('Model');
library.printSearchResults('Monkey');
library.printSearchResults('e');