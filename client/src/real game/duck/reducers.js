import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  
  category: '',
  points: 0,
  goodAnswers:'',
  badAnswers:'',
  currentQuestions: [],
  currentQuestion:[],
  // randomQuestion: [],
  questionsAsked: [],
  questionsToAsk: [],
  gameFinished: false,
}

const realGameReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case types.ADD_POINT:
        draft.points = draft.points + 1
        break;

      case types.RESET_POINTS:
        draft.points = 0
        break;

      case types.ADD_QUESTIONS:
        draft.currentQuestions = action.payload.currentQuestions;
        draft.questionsToAsk = action.payload.currentQuestions;
      
        break;

      case types.DRAW_QUESTION:
        
        let randomNumber = Math.floor(Math.random() * draft.questionsToAsk.length);

        draft.currentQuestion = draft.questionsToAsk[randomNumber];
        // draft.questionsToAsk.splice(randomNumber, 1);
        draft.questionsAsked.push(draft.currentQuestion);

        if (draft.questionsToAsk.length === 0 && !draft.currentQuestion) {
          draft.gameFinished = true;
          }
        break;

      default:
        return draft
    }
  })

export default realGameReducer;