import actions from './actions'

const fetchQuestions = async () => {
  const response = await fetch('http://localhost:5000/api/question', { method: 'GET' })
  const json = await response.json();
  return json
}

export const getQuestions = () =>
  async (dispatch) => {
    const questions = await fetchQuestions();

    questions.map(question => dispatch(actions.addQuestion(
        question.newQuestion, question.continent,
        question.answerA, question.answerB, question.answerC, question.answerD, question.id, question.goodAnswer )))
  }