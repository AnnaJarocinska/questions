import types from './types';

const handleCorrectAnswer = () => ({
    type: types.HANDLE_CORRECT_ANSWER
})

const handleWrongAnswer = () => ({
    type: types.HANDLE_WRONG_ANSWER
})

const addQuestions = (currentQuestions) => ({
    type: types.ADD_QUESTIONS,
    payload: {currentQuestions}
})

const drawQuestion = () => ({
    type: types.DRAW_QUESTION,
})

export default {
    handleCorrectAnswer,
    handleWrongAnswer,
    addQuestions,
    drawQuestion
}