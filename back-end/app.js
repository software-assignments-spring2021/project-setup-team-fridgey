// import and instantiate express
const axios = require("axios")
const { response } = require("express")
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const bodyParser = require("body-parser")
app.use(bodyParser.json()) // decode JSON-formatted incoming POST data
app.use(bodyParser.urlencoded({ extended: true })) // decode url-encoded incoming POST
var request=require ("request")

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


app.get("/getRecipe",(req,res)=>{//add    :name parameters later
  request("https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
  function(error, response, body){
    if(!error &&response.statusCode==200){
      let parsedBody=JSON.parse(body)
      let recipe=parsedBody[0]
      res.json({recipe})

    }
  }
  )
})

app.post("/addIngredientToSL",(req,res)=>{
  
  const data ={
    status: "amazing success!",
    message: "congratulations on send us this data!",
    data : {name:req.body.name}
  }
  res.json(data)
})

// export the express app we created to make it available to other modules
module.exports = app