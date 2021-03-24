// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object

// we will put some server logic here later...
app.get("/", (req, res) => {
  res.send("Hello!")
})

app.get("/json-example", (req, res) => {
  const body = {
    title: 'Hello',
    heading:"Hello",
    message: "Alex is sexy",
  }
  res.json(body)
})

// export the express app we created to make it available to other modules
module.exports = app