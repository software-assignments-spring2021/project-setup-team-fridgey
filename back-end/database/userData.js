const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userDataSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

userDataSchema.pre("save", async function(next) {
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Generate hashed password
    const passwordHash = await bcrypt.hash(this.password, salt);

    // Re-assign hashed password over original password
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userDataSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;