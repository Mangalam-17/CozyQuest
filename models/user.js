const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // we dont need to define username and password here because
  // passport local mongoose will automatically define these both, we dont need to define that
});

userSchema.plugin(passportLocalMongoose);
// we use this plugin as it helps to automatically generates - username, hashing, salting and hashed password
// we dont need to build these things from scratch

module.exports = mongoose.model("User", userSchema);
