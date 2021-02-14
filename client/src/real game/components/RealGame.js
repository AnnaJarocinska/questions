import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import realGameActions from '../../real game/duck/actions';
import AnswerParagraph from '../../styles/AnswerParagraph';
import QuestionParagraph from '../../styles/QuestionParagraph';
import QuestionContainer from '../../styles/QuestionContainer';
import PointsContainer from '../../styles/PointsContainer';
import PointsBox from '../../styles/PointsBox';
import RealGameFinished from './RealGameFinished';

const RealGame = ({currentQuestion, points, gameFinished,
      handleAnswer, drawQuestion }) => {

    const handleAnswerClick = (e) => {
        let index = e.target.getAttribute('name').length -1
        let letter = e.target.getAttribute('name').charAt(index).toLowerCase()
        const content = {
            userAnswer: letter,
            questionId: currentQuestion._id,
        }
        const checkAnswer = async () => {  
            await axios.post('/api/checkAnswer', content) 
            .then(res => {
                handleAnswer(res.data);
                drawQuestion();
            })
            .catch (
                err => console.log(err)
            )
        }
        checkAnswer();
    }
    const current = [];
     if (currentQuestion) {
    for (let [key, value] of Object.entries(currentQuestion)){
        if(key === 'question'|| key === 'answerA' || key === 'answerB' ||
         key === 'answerC' || key === 'answerD') {
        current.push(
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
                onClick={handleAnswerClick}>
                    {value}</AnswerParagraph>)
    } 
}}
    return ( 
        <>
        {!gameFinished &&
        <>
        <PointsContainer>
            <p>Points : </p> 
            <PointsBox> {points} </PointsBox>
        </PointsContainer> 
    <QuestionContainer>
       {current}
    </QuestionContainer>
    </>}
    {gameFinished &&
    <RealGameFinished/>}
    </>
   );
}

const mapStateToProps = (state) => ({
    currentQuestion: state.realGame.currentQuestion,
    points: state.realGame.points,
    gameFinished: state.realGame.gameFinished
})

const mapDispatchToProps = (dispatch) => ({
    handleAnswer: (result) =>  dispatch(realGameActions.handleAnswer(result)),
    drawQuestion: () =>  dispatch(realGameActions.drawQuestion())
  })

export default connect(mapStateToProps, mapDispatchToProps) (RealGame);