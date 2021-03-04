import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import realGameActions from '../duck/actions';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Button from '../../styles/Button';

const RealGameFinished = ({points, category, correctAnswers, wrongAnswers, clearState}) => {

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
    }, [points, category, correctAnswers, wrongAnswers])
    
    const handleClick = () => {
        clearState();
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
    wrongAnswers: state.realGame.wrongAnswers
})

const mapDispatchToProps = (dispatch) => ({
    clearState: () =>  dispatch(realGameActions.clearState())
  })


export default connect(mapStateToProps, mapDispatchToProps)(RealGameFinished);