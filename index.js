var library = {
  tracks: { 
    123: { 
      id: 123,
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    456: { 
      id: 456,
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"}
  },

  playlists: {
    789: { 
      id: 789,
      name: "Coding Music",
      tracks: [123, 456],
      PrintPlayList: function(){
        console.log("*** Print Play List Info ***");
        console.log("Playlist name is " + this.name);
        for(let track of this.tracks){
          console.log(" Songs are " + library.tracks[track].name + " By " + library.tracks[track].artist );
        };
      }
    },
    786: { 
      id: 786,
      name: "Other Music",
      tracks: [123],
      PrintPlayList: function(){
        console.log("*** Print Play List Info ***");
        console.log("Playlist name is " + this.name);
        for(let track of this.tracks){
          console.log(" Songs are " + library.tracks[track].name + " By " + library.tracks[track].artist );
        };
      }
    }

  },
  PrintPlayLists: function(){
    console.log("*** Print Play Lists ***");
    for(let playlist in this.playlists){
    console.log(this.playlists[playlist].name)
      for(let track of this.playlists[playlist].tracks){
        console.log(" with song " + track);

      }
    }
  },
  printTracks: function(){
    console.log("*** Print Tracks")
    for(let track in this.tracks){
      console.log(this.tracks[track].name+ " From: " + this.tracks[track].artist);
    }
  }
};

library.playlists["789"].PrintPlayList()
library.playlists["786"].PrintPlayList()
library.PrintPlayLists()
library.printTracks()