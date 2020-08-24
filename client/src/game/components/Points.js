import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getQuestions } from '../duck/operations';
import actions from '../duck/actions';
import OneQuestion from './OneQuestion';

const Points = ({points, questions, getQuestions, getRandomQuestion, gameFinished}) => {
  
    useEffect(() => {getQuestions()}, [getQuestions])

const questionList = []

 Object.entries(questions).forEach((element) => {
    Object.entries(element[1]).forEach( (item, index) => {
        const oneQuestion = <button key={shortid.generate()}>{item[1]}</button>
        questionList.push(oneQuestion)
    })
})

const handleClick = () => {
    getRandomQuestion()}

    return ( 
        <>   
            <p>Points: {points}</p>
            <p>Questions: {questionList}</p>
            <p>Random question</p>
            <button onClick={handleClick}> get random question</button>
            {!gameFinished && <OneQuestion/>}
        </>
     );
}
 
const mapStateToProps = (state) => ({
    points: state.game.points, 
    questions: state.game.questions,
    randomQuestion: state.game.randomQuestion,
    gameFinished: state.game.gameFinished,
  })

  const mapDispatchToProps = dispatch => ({
    getQuestions: () => dispatch(getQuestions()),
    getRandomQuestion: () => dispatch(actions.getRandomQuestion())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Points);