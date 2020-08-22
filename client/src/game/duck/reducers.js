import types from './types';
import produce from 'immer';

const INITIAL_STATE = {

  points: 0,
  questions: [],
  randomQuestion: [],
  questionsAsked: [],
  gameFinished: false,
}

const gameReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case types.ADD_POINT:
        draft.points = draft.points + 1
        break;

      case types.SUBTRACT_POINT:
        draft.points = draft.points - 1
        break;

      case types.RESET_POINTS:
        draft.points = 0
        break;

      case types.ADD_QUESTION:
        draft.questions.push(action.payload)
        break;

      case types.GET_RANDOM_QUESTION:
        const questionsLength = draft.questions.length
        let randomNumber = Math.floor(Math.random() * questionsLength);
        const nextQuestion = draft.questions[randomNumber]

        if (!nextQuestion.asked) {
          draft.randomQuestion = nextQuestion;
          draft.questionsAsked.push(nextQuestion);
          draft.randomQuestion.asked = true;
        }

        if (draft.questionsAsked.length >= draft.questions.length) {
          draft.gameFinished = true
        }
        break;
      default:
        return draft
    }
  })

export default gameReducer;