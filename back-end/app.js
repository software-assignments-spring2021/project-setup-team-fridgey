// import and instantiate express
const fs = require("fs")
const express = require("express") // CommonJS import style!
const axios = require("axios")
require("dotenv").config({ silent:true })
const app = express() // instantiate an Express object

// we will put some server logic here later...
app.get("/", (req, res) => {
  res.send("Hello!")
})

app.get("/storagetimeitems", (req, res) => {
  axios
    .get(`${process.env.API_BASE_URL}?key=${process.env.API_SECRET_KEY}&num=10`)
    .then(apiResponse => res.json(apiResponse.data))
    .catch(error => console.log("error"))
})

// export the express app we created to make it available to other modules
module.exports = app