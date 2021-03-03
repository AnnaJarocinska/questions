import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Button from '../../styles/Button';

const RealGameFinished = ({points, category, correctAnswers, currentQuestions}) => {

    const wrongAnswers =  currentQuestions.length - correctAnswers;

    useEffect(() => {
        async function sendData() {
            const content = {
            points: points,
            category: category,
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers,
            date: Date.now,
        }
       await axios.post('/user/saveGame', content)
    }
    sendData();
    }, [points, category, correctAnswers, currentQuestions, wrongAnswers])
    
    const handleClick = () => {
        window.location.reload(); 
    }
    return (  
        <>
            <CapitalLetterParagraph> Game finished </CapitalLetterParagraph>
            <Button login red onClick={handleClick}> Start again </Button> 
        </>
    );
}
 
const mapStateToProps = (state) => ({
    points: state.realGame.points,
    category: state.realGame.category,
    correctAnswers: state.realGame.correctAnswers,
    currentQuestions: state.realGame.currentQuestions
})

export default connect(mapStateToProps, null)(RealGameFinished);