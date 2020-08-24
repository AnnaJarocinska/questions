import types from './types';
import produce, { current } from 'immer';

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

        if(draft.questionsAsked.length === 0){
        draft.questionsToAsk = [...draft.questions];
        }

        let questionsToAskLength = draft.questionsToAsk.length
        let randomNumberA = Math.floor(Math.random() * questionsToAskLength);
        const nextQuestion = draft.questionsToAsk[randomNumberA]

        draft.randomQuestion = nextQuestion;
       
        if (!draft.questionsAsked.includes(nextQuestion)){

            draft.questionsAsked.push(draft.randomQuestion)
            const hasCurrentQuestion = item => {
              return item.question === draft.randomQuestion.question
            }

            let QuestionToRemoveIndex = draft.questionsToAsk.findIndex(hasCurrentQuestion)
             draft.questionsToAsk.splice(QuestionToRemoveIndex,1)

              if(draft.randomQuestion){
            draft.randomQuestion.asked = true;
              }
          } 
  
        if (draft.questionsToAsk.length === 0 && !draft.randomQuestion) {
          draft.gameFinished = true;
          }         
        break;

        case types.ANSWER_QUESTION:
         
        // draft.questions[action.payload.id].answered = true;
        // draft.questionsToAsk[action.payload.id].answered = true;

          draft.questionsToAsk.forEach(element => {
          const isEveryQuestionAnswered = (element, index, array) => {
           return (element.answered === true)
          }
          
          if (draft.questionsToAsk.every(isEveryQuestionAnswered)){
           draft.gameFinished = true;
         }
       })   
       break;

      default:
        return draft
    }
  })

export default gameReducer;