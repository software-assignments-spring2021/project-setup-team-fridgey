const mongoose = require("mongoose");

const URI =
  "mongodb+srv://master-user:wTMW1F3Vh2GE9i2q@cluster0.fsr0o.mongodb.net/fridgey?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Successfully connected to MongoDB Atlas!"))
  .catch((err) => console.log(err))
};

module.exports = connectDB;

//   .connect(
//     "mongodb+srv://master-user:wTMW1F3Vh2GE9i2q@cluster0.fsr0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("Successfully connected to MongoDB Atlas!");
//   })
//   .catch((error) => {
//     console.log("Unable to connect to MongoDB Atlas!");
//     console.error(error);
//   });
