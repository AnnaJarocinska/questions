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

const gameReducer = (state = INITIAL_STATE, action) =>
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

      case types.CLEAR_STATE:
        draft.category = '';
        draft.mode = '';
        draft.points = 0;
        draft.correctAnswers = 0;
        draft.wrongAnswers = 0;
        draft.currentQuestions = [];
        draft.currentQuestion = [];
        draft.questionsAsked = [];
        draft.questionsToAsk = [];
        draft.gameOn = false;
        draft.gameFinished = false; 
        break;

      default:
        return draft
    }
  })

export default gameReducer;