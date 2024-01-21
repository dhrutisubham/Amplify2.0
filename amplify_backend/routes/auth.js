const express = require("express");
const router = express.Router(); // why not express() only coz it will contain many other things like .listen() also which are not required here---> express.Router() will include get, req, res methods which are necessary here
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");

// This POST route will help to register a user
router.post("/register", async (req, res) => {
  // This code is run when the /register api is called as a POST request

  // My req.body will be of the format (email, password, firstName, lastName, username)
  const { email, password, firstName, lastName, username } = req.body;

  // Step2: Does the user with this email already exist? if yes we throw an error
  const user = await User.findOne({ email: email }); // User.(something) funcs will not give asynchronous resp without 'await'              //the right one is the one we are getting from req.body ---> find a user whose email is equal to the email that we got from body
  if (user) {
    // if I am only sending res.json then by default the status code is 200
    return res
      .status(403)
      .json({ error: "A user with this email already exist" });
  }
  // else This is a valid request

  // Step3: create a new user in the DB
  // Step 3.1: We do not store passwords in plain text
  // We convert a plain text password to a hash.
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserData = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    username,
  };
  const newUser = await User.create(newUserData);

  // Step 4: we want to create the token to return to the user (jwt)
  const token = await getToken(email, newUser); //custom func

  // Step 5: Return the result to the user
  const userToReturn = { ...newUser.toJSON(), token };
  delete userToReturn.password; //deleting the hashed password
  return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
  //Step 1: Get email and password sent by user from req.body
  const { email, password } = req.body;

  //Step 2: Check if a user with the given email exists. If not, the creds are invalid.
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ err: "Invalid credentials" });
  }

  //Step 3: If the user exists, check if the password is correct, If not, the creds are invalid
  //--> Observe here that we have hashed the password and stored in the DB, and the password we are obtaining from the body is in plane text so, we cant compare both the passwords directly
  //--> In order to solve this what we are doing here is that, lets say I two params on which the hashing of my password depends like if I change any of the params my hashed version of the password will change
  //--> else if I keep the params same then always the same hashed password will result. --> This is automatically done by bcrypt, it will store both of those two params together
  //--> bcrypt enabled us to compare one password in plain text(from req.body) to the hashed password(which is in DB) --> security not compromised
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(403).json({ err: "Invalid password" });
  }

  //Step 4: If the creds are correct, return a token to the user.
  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password; //deleting the hashed password
  return res.status(200).json(userToReturn);
});

module.exports = router;
