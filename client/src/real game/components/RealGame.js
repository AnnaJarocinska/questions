import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import realGameActions from '../../real game/duck/actions';
import Paragraph from '../../styles/Paragraph';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Container from '../../styles/Container';
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
               <CapitalLetterParagraph
               key={key} 
               name= {key}
               >
                   {value} ? </CapitalLetterParagraph> 
                   :
                <Paragraph
                key={key} 
                name= {key}
                onClick={handleAnswerClick}>
                    {value}</Paragraph>)
    } 
}}
    return ( 
        <>
        {!gameFinished &&
        <>
        <Container points>
            <p>Points : </p> 
            <PointsBox> {points} </PointsBox>
        </Container> 
    <Container separate>
       {current}
    </Container>
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