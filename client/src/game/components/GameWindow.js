import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import actions from '../duck/actions';
import Paragraph from '../../styles/Paragraph';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import PointsBox from '../../styles/PointsBox';
import GameFinished from './GameFinished';

const GameWindow = ({currentQuestion, points, gameFinished, gameOn, toSave,
     handleAnswer, drawQuestion, startGame, clearGameDetails}) => {

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
               key === 'question'
                ?
               <CapitalLetterParagraph key={key} name= {key}> {value} ? </CapitalLetterParagraph> 
                :
                <Paragraph key={key} name= {key} onClick={handleAnswerClick}> {value} </Paragraph>
                )
            } 
}}
    return ( 
        <>
        <Container main>
            <Container points="true">
                <p>Points : </p> 
                <PointsBox> {points} </PointsBox>
            </Container> 
            <Container separate>
                {!gameFinished ? current : <GameFinished clearGameDetails={clearGameDetails} toSave={toSave}/>}
            </Container>
            {!gameOn && <Button login red onClick={startGame}> Start game </Button>}
        </Container>
        </>
   );
}

const mapStateToProps = (state) => ({
    currentQuestion: state.game.currentQuestion,
    points: state.game.points,
    gameFinished: state.game.gameFinished,
    gameOn: state.game.gameOn
})

const mapDispatchToProps = (dispatch) => ({
    handleAnswer: (result) =>  dispatch(actions.handleAnswer(result)),
    drawQuestion: () =>  dispatch(actions.drawQuestion())
  })

export default connect(mapStateToProps, mapDispatchToProps) (GameWindow);