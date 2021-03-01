import types from './types';

const handleAnswer = (result) => ({
    type: types.HANDLE_ANSWER,
    payload: {result}
})

const addQuestions = (currentQuestions) => ({
    type: types.ADD_QUESTIONS,
    payload: {currentQuestions}
})

const drawQuestion = () => ({
    type: types.DRAW_QUESTION,
})

const setCategory = (category) => ({
    type: types.SET_CATEGORY,
    payload: {category}
})

const setMode = (mode) => ({
    type: types.SET_MODE,
    payload: {mode}
})

export default {
    handleAnswer,
    addQuestions,
    drawQuestion,
    setCategory,
    setMode
}