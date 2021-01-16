const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    // required: true
  }, 
  password: {
    type: String,
    // required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  admin: {
    type: Boolean,
    default: false
  },
  key: {
    type: String,
    default: ''
  },
});module.exports = User = mongoose.model("users", UserSchema);