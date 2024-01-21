const mongoose = require("mongoose"); //package to link nodejs and mongoDb
// How to create a model
//step1: require mongoose
//step2: create a mongoose Schema(structure of a user)
//step3: create a model

const Song = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String, //will store url of every image to access the image
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId, //artist is also user so getting the user Id from user database   // when we will store data in db it will get its unique object id
    ref: "User",
  },
});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;
