const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

  id: {
    type: Number,
    default: 3
  },
  question: {
    type: String,
    required: [true, 'The question field is required']
  },
  continent: {
    type: String,
    required: [true, 'The continent field is required']
  },
  answerA: {
    type: String,
    required: [true, 'The answer field is required']
  },
  answerB: {
    type: String,
    required: [true, 'The answer field is required']
  },
  answerC: {
    type: String,
    required: [true, 'The answer field is required']
  },
  answerD: {
    type: String,
    required: [true, 'The answer field is required']
  },
  goodAnswer: {
    type: String,
    required: [true, 'The good answer field is required']
  },
  created : {type: Date, default: Date.now},
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;