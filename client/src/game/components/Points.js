import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../duck/operations';
import actions from '../duck/actions';
import OneQuestion from './OneQuestion';

const Points = ({points, questions, getQuestions, getRandomQuestion}) => {
  
    useEffect(() => {getQuestions()}, [])

const questionList = []

 Object.entries(questions).map((element) => {
    Object.entries(element[1]).forEach( item => {
        const oneQuestion = <button>{item[1]}</button>
        questionList.push(oneQuestion)
    })
})

const handleClick = () => {
    getRandomQuestion()}


// const randomQuestion = []
// const randomNumber = Math.floor(Math.random()*(3-0));
// const randomQuest = Object.values(questions)[randomNumber]; //obj

// for (let prop in randomQuest) {
//     const oneRandomQuestion =<p> {randomQuest[prop]}</p>
//     randomQuestion.push(oneRandomQuestion);
//  }

    return ( 
        <>
               
                <p>Points: {points}</p>
                <p>Questions: {questionList}</p>
                <p>Random question</p>
                <button onClick={handleClick}> get random question</button>
                <OneQuestion/>
           
        </>
     );
}
 
const mapStateToProps = (state) => ({
    points: state.game.points, 
    questions: state.game.questions,
    randomQuestion: state.game.randomQuestion,
  })

  const mapDispatchToProps = dispatch => ({
    getQuestions: () => dispatch(getQuestions()),
    getRandomQuestion: () => dispatch(actions.getRandomQuestion())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Points);