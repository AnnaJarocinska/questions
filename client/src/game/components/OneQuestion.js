import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const OneQuestion = ({randomQuestion, addPoint, subtractPoint, getRandomQuestion}) => {

    let goodAnswer = randomQuestion.goodAnswer;

    const handleAnswerClick = (e) => {
        let index = e.target.getAttribute('name').length -1
        let letter = e.target.getAttribute('name').charAt(index).toLowerCase()
        if (letter === goodAnswer) {
            addPoint();
            getRandomQuestion();
        } else {
            subtractPoint();
            getRandomQuestion();
            // resetPoints();
        }
    }

    const currentQuestion = [];
    for (let [key, value] of Object.entries(randomQuestion)){
        if(key === 'question'|| key === 'answerA' || key === 'answerB' || key === 'answerC' || key === 'answerD'){
        currentQuestion.push(
               key === 'question'?
               <p
               key={key} 
               name= {key}>
                   {value}</p> 
                   :
                <p
                key={key} 
                name= {key}
                onClick={handleAnswerClick}>
                    {value}</p>)
    }}

    return ( 
        <>
           <p>{currentQuestion}</p>
        </>
     );
}

const mapStateToProps = (state) => ({
    randomQuestion: state.game.randomQuestion,
  })

const mapDispatchToProps = (dispatch) => ({
    addPoint: () =>  dispatch(actions.addPoint()),
    subtractPoint: () =>  dispatch(actions.subtractPoint()),
    getRandomQuestion: () => dispatch(actions.getRandomQuestion())
    // resetPoints: () =>  dispatch(actions.resetPoints()),
  })  

export default connect(mapStateToProps, mapDispatchToProps)(OneQuestion);