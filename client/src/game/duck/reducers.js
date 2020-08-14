import types from './types';

const INITIAL_STATE = {

  points: 0,
  questions:[],
  // question: {
  //   id: '',
  //   continent:'',
  //   question:'',
  //   answerA: '',
  //   answerB: '',
  //   answerC: '',
  //   answerD: '',
  //   goodAswer:
  // }
}

const gameReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
      case types.ADD_POINT:
      return {
        ...state, points: [...state.points +1]
      }
    case types.RESET_POINTS:
      return {
        ...state, points: 0
      }
      case types.FETCH_QUESTIONS:
      return {
        ...state, questions: [...state.questions, action.item ]
      }
      case types.ADD_QUESTION:
        return {
          ...state, questions: [...state.questions, action.question, action.continent, action.answerA, action.answerB, action.answerC, action.answerD, action.id ]
        }
      default:
        return state   
    }
  }

export default gameReducer;