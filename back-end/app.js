// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
// const port = 5000;
var request = require("request");

const data = require("../front-end/src/data/fridgeMockData.json");
console.log(data);
// we will put some server logic here later...
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/json-example", (req, res) => {
  const body = {
    title: "Hello",
    heading: "Hello",
    message: "Alex is sexy",
  };
  res.json(body);
});

app.get("/getFridgeData", (req, res) => {
  // request(
  //   "https://my.api.mockaroo.com/fridge_mock_data.json?key=842e8840",
  //   function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       // var parsedBody = JSON.parse(body);
  //       // var a = parsedBody[0]["meats"];
  //       res.send(body);
  //     }
  //   }
  // );
  res.json(data);
  // let b = await axios.get("/getFridgeData");
  // console.log(b.data[0]);
  // return Object.entries(b.data[0]);
});

app.delete("/getFridgeData", (req, res));

// or app.patch()

// app.listen(port, () => console.log("Hello!"));

// export the express app we created to make it available to other modules
module.exports = app;
