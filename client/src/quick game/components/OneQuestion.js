import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import QuestionContainer from '../../styles/QuestionContainer';
import QuestionParagraph from '../../styles/QuestionParagraph';
import AnswerParagraph from '../../styles/AnswerParagraph';

const OneQuestion = ({randomQuestion, questionsAsked, questionsToAsk, questions,
    addPoint, subtractPoint, getRandomQuestion, answerQuestion,
    max}) => {

    let goodAnswer = randomQuestion.goodAnswer;
   
    const handleAnswerClick = (e) => {
        let index = e.target.getAttribute('name').length -1
        let letter = e.target.getAttribute('name').charAt(index).toLowerCase()
        let answerId = e.target.getAttribute('id')
        if (letter === goodAnswer) {
            addPoint();
            getRandomQuestion();
            answerQuestion(answerId, 'good');
        } else {
            subtractPoint();
            getRandomQuestion();
            answerQuestion(answerId, 'bad');            
        }
    }

    const currentQuestion = [];
    for (let [key, value] of Object.entries(randomQuestion)){
        if(key === 'question'|| key === 'answerA' || key === 'answerB' || key === 'answerC' || key === 'answerD'){
           
        currentQuestion.push(
               key === 'question'?
               <QuestionParagraph
               key={key} 
               name= {key}
               >
                   {value} ? </QuestionParagraph> 
                   :
                <AnswerParagraph
                key={key} 
                name= {key}
                id={randomQuestion.id}
                onClick={handleAnswerClick}>
                    {value}</AnswerParagraph>)
    }}

    return ( 
        <>
        <QuestionContainer max={max ? max.toString() : undefined}>
           {currentQuestion}
        </QuestionContainer>
        </>
     );
}

const mapStateToProps = (state) => ({
    randomQuestion: state.game.randomQuestion,
    questionsAsked: state.game.questionsAsked,
    questionsToAsk: state.game.questionsToAsk, 
    questions: state.game.questions
})

const mapDispatchToProps = (dispatch) => ({
    addPoint: () =>  dispatch(actions.addPoint()),
    subtractPoint: () =>  dispatch(actions.subtractPoint()),
    getRandomQuestion: () => dispatch(actions.getRandomQuestion()),
    answerQuestion: (id, goodOrBad) => dispatch(actions.answerQuestion(id, goodOrBad))
  })  

export default connect(mapStateToProps, mapDispatchToProps)(OneQuestion);