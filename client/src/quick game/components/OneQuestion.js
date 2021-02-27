import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import Container from '../../styles/Container';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';

const OneQuestion = ({randomQuestion,
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
               <CapitalLetterParagraph
               key={key} 
               name= {key}
               >
                   {value} ? </CapitalLetterParagraph> 
                   :
                <Paragraph
                key={key} 
                name= {key}
                id={randomQuestion.id}
                onClick={handleAnswerClick}>
                    {value}</Paragraph>)
    }}

    return ( 
        <>
        <Container max={max ? max.toString() : undefined}>
           {currentQuestion}
        </Container>
        </>
     );
}

const mapStateToProps = (state) => ({
    randomQuestion: state.quickGame.randomQuestion,
    questionsAsked: state.quickGame.questionsAsked,
    questionsToAsk: state.quickGame.questionsToAsk, 
    questions: state.quickGame.questions
})

const mapDispatchToProps = (dispatch) => ({
    addPoint: () =>  dispatch(actions.addPoint()),
    subtractPoint: () =>  dispatch(actions.subtractPoint()),
    getRandomQuestion: () => dispatch(actions.getRandomQuestion()),
    answerQuestion: (id, goodOrBad) => dispatch(actions.answerQuestion(id, goodOrBad))
  })  

export default connect(mapStateToProps, mapDispatchToProps)(OneQuestion);