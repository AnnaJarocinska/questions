import types from './types';


const add = (item) => ({
    type: types.ADD_POINT, item
})

const reset = (item) => ({
    type: types.RESET_POINTS, item
})

const addQuestion = (question, continent, answerA, answerB, answerC, answerD, id, goodAnswer) => ({
    type: types.ADD_QUESTION,
    payload: {question, continent, answerA, answerB, answerC, answerD, id, goodAnswer}
})

const fetchQuestions = () => ({
    type: types.FETCH_QUESTIONS,
})

export default {
    add,
    reset,
    fetchQuestions,
    addQuestion,
}