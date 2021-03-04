import types from './types';
import produce from 'immer';

const INITIAL_STATE = { 
  category: '',
  mode: '',
  points: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  currentQuestions: [],
  currentQuestion:[],
  questionsAsked: [],
  questionsToAsk: [],
  gameOn: false,
  gameFinished: false,
}

const realGameReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case types.HANDLE_ANSWER:
        if(action.payload.result === "correctAnswer") {
          draft.points++;
          draft.correctAnswers++; 
        }
        if(action.payload.result === "wrongAnswer") {
          draft.points > 0 ? draft.points-- : draft.points = 0;
          draft.wrongAnswers++; 
        }
        if (draft.correctAnswers + draft.wrongAnswers === draft.currentQuestions.length) {
          draft.gameFinished = Date.now();
          }
          break;  

      case types.ADD_QUESTIONS:
        draft.currentQuestions = action.payload.currentQuestions;
        draft.questionsToAsk = action.payload.currentQuestions;
        draft.gameOn = Date.now();
        break;

      case types.DRAW_QUESTION:
        let randomNumber = Math.floor(Math.random() * draft.questionsToAsk.length);
        draft.currentQuestion = draft.questionsToAsk[randomNumber];
        draft.questionsToAsk.splice(randomNumber, 1);
        if(draft.currentQuestion !== undefined){
        draft.questionsAsked.push(draft.currentQuestion);
        }
        break;

      case types.SET_GAME_DETAILS:
        draft.category = action.payload.category;
        draft.mode = action.payload.mode;
        break;

      default:
        return draft
    }
  })

export default realGameReducer;