const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeysSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  
});module.exports = Keys = mongoose.model("keys", KeysSchema);