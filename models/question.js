const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The question field is required']
  }
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;