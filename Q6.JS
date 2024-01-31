function createPlaylist(playlistName) {
    let songs = [];
    
    return {
        addSong: function(songName, artist) {
            songs.push({songName, artist});
        },
        listSongs: function() {
            console.log(`${playlistName} Playlist:`);
            songs.forEach((song, index) => {
                console.log(`Song${index + 1}: ${song.songName} by ${song.artist}`);
            });
        }
    };
}

const myPlaylist = createPlaylist("My Favorites");

myPlaylist.addSong("Song1", "Artist1");
myPlaylist.addSong("Song2", "Artist2");
myPlaylist.addSong("Song3", "Artist3");

myPlaylist.listSongs();
