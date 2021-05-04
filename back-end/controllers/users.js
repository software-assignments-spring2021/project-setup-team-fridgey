const JWT = require("jsonwebtoken");
const UserData = require("../database/userData");
const { JWT_SECRET } = require("../configuration");
const { async } = require("regenerator-runtime");
var uniqid = require('uniqid');
var currentUser = "unassigned";

signToken = user => {
  return JWT.sign({
    iss: "fridgey",
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;

    // Check if there is account with same email
    const foundUser = await UserData.findOne({ email });
    if (foundUser) {
      res.status(403).json({ error: "Email is already in use"});
    }

    // Create new user
    const newUser = new UserData({ email, password });
    await newUser.save();
    
    // Generate the token
    const token = signToken(newUser)

    // Respond with token
    res.status(200).json({ token });
  },

  
  signIn: async (req, res, next) => {
    // Generate the token
    // const token = signToken(req.user);
    const id = req.user.id
    currentUser = id;
    res.status(200).json({ id });
  },

  secret: async (req, res, next) => {
    console.log("i'm here!!!");
    res.json({ secret: "resource" });
  },

  getUser: async(req,res,next) => {
    if(currentUser == "unassigned")
    {
      currentUser = uniqid('temp-');
      res.send(currentUser);
    }
    else
      res.send(currentUser);
  }
}