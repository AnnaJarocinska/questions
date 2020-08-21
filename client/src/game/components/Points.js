import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../duck/operations';

const Points = ({points, questions, question, getQuestions}) => {

    useEffect(() => {getQuestions()}, [])

const questionList = []

 Object.entries(questions).map((element) => {
    Object.entries(element[1]).forEach( item => {
        const oneQuestion = <div><button>{item[1]}</button></div>
        questionList.push(oneQuestion)
    })
})

const randomQuestion = []
const randomNumber = Math.floor(Math.random()*(3-0));
const randomQuest = Object.values(questions)[randomNumber]; //obj

for (let prop in randomQuest) {
    const oneRandomQuestion =<p> {randomQuest[prop]}</p>
    randomQuestion.push(oneRandomQuestion);
 }

    return ( 
        <>
            <div>    
                <p>Points: {points}</p>
                <p>Questions: {questionList}</p>
                <p>One question: {randomQuestion}</p>
            </div>
        </>
     );
}
 
const mapStateToProps = (state) => ({
    points: state.game.points, 
    questions: state.game.questions,
    // questions: getQuestions(state),
  })

  const mapDispatchToProps = dispatch => ({
    getQuestions: () => dispatch(getQuestions())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Points);