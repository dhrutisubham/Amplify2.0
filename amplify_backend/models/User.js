const mongoose = require("mongoose"); //package to link nodejs and mongoDb
// How to create a model
//step1: require mongoose
//step2: create a mongoose Schema(structure of a user)
//step3: create a model

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, //this is required or not i.e without this can i create the database?
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
  lastName: {
    type: String,
    required: false, //if not written then by default required is false
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  likedSongs: {
    //we will change this to array later
    type: String,
    default: "",
  },
  likedPlayLists: {
    //we will change this to array later
    type: String,
    default: "",
  },
  subscribedArtists: {
    type: String,
    default: "",
  },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;
