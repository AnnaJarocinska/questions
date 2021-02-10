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

const addQuestions = (question, continent, answerA, answerB, answerC, answerD, id, goodAnswer) => ({
    type: types.ADD_QUESTIONS,
    payload: {question, continent, answerA, answerB, answerC, answerD, id, goodAnswer}
})

const getRandomQuestion = (question, continent, answerA, answerB, answerC, answerD, id, goodAnswer) => ({
    type: types.GET_RANDOM_QUESTION,
    payload: {question, continent, answerA, answerB, answerC, answerD, id, goodAnswer}
})

const answerQuestion = (id, goodOrBad) => ({
    type: types.ANSWER_QUESTION,
    payload: {id, goodOrBad}
})

export default {
    addPoint,
    subtractPoint,
    resetPoints,
    addQuestions,
    getRandomQuestion,
    answerQuestion
}