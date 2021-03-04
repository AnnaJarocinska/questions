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

const setGameDetails = (category, mode) => ({
    type: types.SET_GAME_DETAILS,
    payload: {category, mode}
})

const clearState = () => ({
    type: types.CLEAR_STATE
})

export default {
    handleAnswer,
    addQuestions,
    drawQuestion,
    setGameDetails,
    clearState
}