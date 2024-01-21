const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json()); //req.body me jo bhi aa raha hai use json me convert kr dena hai since req.body json pe shi chalega

// connecting mongodb to our node app
// mongoose.connect() takes 2 arguments : 1. which db to connect to (db url).  2. connection options

//--> why this process.env.MONGO_PASSWORD --> when I will push my project on github I will not push .env so locally I have stored my password in .env file but when any other user want to use this project so he have to create his own .env file store his password then use it so my creds are secure
//+  process.env.MONGO_PASSWORD +
mongoose
  .connect(
    "mongodb+srv://aawadh9679:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.yizrpzo.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!".cyan.underline);
  })
  .catch((err) => {
    console.log(err);
  });

// Setup passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.identifier }, function (err, user) {
      // done(error, doesTheUserExist)
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

// API: GET type : / : return text "Hello World"
app.get("/", (req, res) => {
  // req contains all data for the request
  // res contains all data for the response
  res.send("Hello World");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
