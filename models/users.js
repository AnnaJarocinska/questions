const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
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
  games: [
    {
      points: {
        type: Number
      },
      category: {
        type: String
      },
      correctAnswers: {
        type: Number
      },
      wrongAnswers: {
        type: Number
      },
        date: {
          type: Date
        }
      }
    
  ],
});
module.exports = User = mongoose.model("users", UserSchema);