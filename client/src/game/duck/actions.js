import types from './types';

const addPoint = () => ({
    type: types.ADD_POINT
})

const subtractPoint = () => ({
    type: types.SUBTRACT_POINT
})

const resetPoints = () => ({
    type: types.RESET_POINTS
})

const addQuestion = (question, continent, answerA, answerB, answerC, answerD, id, goodAnswer) => ({
    type: types.ADD_QUESTION,
    payload: {question, continent, answerA, answerB, answerC, answerD, id, goodAnswer}
})

const fetchQuestions = () => ({
    type: types.FETCH_QUESTIONS,
})

const getRandomQuestion = (question, continent, answerA, answerB, answerC, answerD, id, goodAnswer) => ({
    type: types.GET_RANDOM_QUESTION,
    payload: {question, continent, answerA, answerB, answerC, answerD, id, goodAnswer}
})

export default {
    addPoint,
    subtractPoint,
    resetPoints,
    fetchQuestions,
    addQuestion,
    getRandomQuestion,
}