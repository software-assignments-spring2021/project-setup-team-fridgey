const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;