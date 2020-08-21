import types from './types';
import produce from 'immer';

const INITIAL_STATE = {

  points: 0,
  questions:[],
  question:
  {
    id: '',
    continent:'',
    question:'',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
    goodAswer: '',
  }
}

const gameReducer = (state = INITIAL_STATE, action) => 
produce(state, draft => {
    switch (action.type) {

      case types.ADD_POINT:
        draft.points = draft.points + 1
      break;

      case types.RESET_POINTS:
        draft.points = 0
        break;

      case types.ADD_QUESTION:
          draft.questions.push(action.payload) 
          break;
        
      default:
        return draft  
    }
  })

export default gameReducer;