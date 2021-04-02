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
  /*
  axios
    .get(`${process.env.API_BASE_URL}?key=${process.env.API_SECRET_KEY}&num=10`)
    .then(apiResponse => res.json(apiResponse.data))
    .catch(error => console.log("error"))
    */
  const body = [
    {"id":1,"food":"Carbonated Water - Wildberry","storage_time_short":1,"storage_time_medium":1.5,"storage_time_long":2,"category":2},
    {"id":2,"food":"Rye Special Old","storage_time_short":20,"storage_time_medium":30,"storage_time_long":40,"category":3},
    {"id":3,"food":"Bread - Bagels, Plain","storage_time_short":37,"storage_time_medium":55.5,"storage_time_long":74,"category":1},
    {"id":4,"food":"Mix Pina Colada","storage_time_short":1,"storage_time_medium":1.5,"storage_time_long":2,"category":3},
    {"id":5,"food":"Bread - White, Unsliced","storage_time_short":29,"storage_time_medium":43.5,"storage_time_long":58,"category":1},
    {"id":6,"food":"Beef - Tenderloin Tails","storage_time_short":15,"storage_time_medium":22.5,"storage_time_long":30,"category":1}
  ]
  res.json(body)
})

// export the express app we created to make it available to other modules
module.exports = app