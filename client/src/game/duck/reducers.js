import types from './types';
import produce from 'immer';

const INITIAL_STATE = {

  points: 0,
  questions: [],
  randomQuestion: [],
  questionsAsked: [],
  questionsToAsk: [],
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

        if(draft.questionsAsked.length === 0){
        draft.questionsToAsk = [...draft.questions];
        }

        if (!nextQuestion.asked) {
          draft.randomQuestion = nextQuestion;
       
          if (!draft.questionsAsked.includes(draft.randomQuestion)){
            draft.questionsAsked.push(draft.randomQuestion);
            draft.questionsToAsk.pop(draft.randomQuestion)
            draft.randomQuestion.asked = true;
          } 
        }
       
        if (draft.questionsToAsk.length === 0 ) {
          console.log('nie ma juz pytan do zadania')
          }         
        break;

        case types.ANSWER_QUESTION:
        draft.questions[action.payload.id].answered = true;
        
        draft.questions.forEach(element => {
         const isEveryQuestionAnswered = (element, index, array) => {
           return (element.answered === true)
          }
         if (draft.questions.every(isEveryQuestionAnswered)){
           draft.gameFinished = true;
         }
       })   
       break;

      default:
        return draft
    }
  })

export default gameReducer;