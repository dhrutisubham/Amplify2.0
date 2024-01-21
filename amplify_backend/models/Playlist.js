const mongoose = require("mongoose"); //package to link nodejs and mongoDb
// How to create a model
//step1: require mongoose
//step2: create a mongoose Schema(structure of a user)
//step3: create a model

const Playlist = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String, //will store url of every image to access the image
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId, //artist is also user so getting the user Id from user database   // when we will store data in db it will get its unique object id
    ref: "User",
  },
  //1. Playlist mein songs kon se hai
  //2. Playlist collaborators
  songs: [
    // this shows array
    {
      type: mongoose.Types.ObjectId,
      ref: "Song", // from song id in Song.js I will get thumbnail, name etc
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;
