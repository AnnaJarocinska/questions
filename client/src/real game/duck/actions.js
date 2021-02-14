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

export default {
    handleAnswer,
    addQuestions,
    drawQuestion,
    setCategory
}