import types from './types';
import produce from 'immer';

const INITIAL_STATE = { 
  category: '',
  points: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  currentQuestions: [],
  currentQuestion:[],
  questionsAsked: [],
  questionsToAsk: [],
  gameFinished: false,
}

const realGameReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case types.HANDLE_CORRECT_ANSWER:
        draft.points++;
        draft.correctAnswers++;
        break;

      case types.HANDLE_WRONG_ANSWER:
        draft.points--;
        draft.wrongAnswers++;
        break;

      case types.ADD_QUESTIONS:
        draft.currentQuestions = action.payload.currentQuestions;
        draft.questionsToAsk = action.payload.currentQuestions;
        break;

      case types.DRAW_QUESTION:
        let randomNumber = Math.floor(Math.random() * draft.questionsToAsk.length);
        draft.currentQuestion = draft.questionsToAsk[randomNumber];
        draft.questionsToAsk.splice(randomNumber, 1);
        draft.questionsAsked.push(draft.currentQuestion);
        if (draft.correctAnswers + draft.wrongAnswers === draft.currentQuestions.length) {
          draft.gameFinished = true;
          }
        break;

      default:
        return draft
    }
  })

export default realGameReducer;