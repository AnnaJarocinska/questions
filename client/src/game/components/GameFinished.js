import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Button from '../../styles/Button';

const GameFinished = ({points, category, correctAnswers, wrongAnswers, clearState, clearGameDetails, toSave}) => {
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
    toSave !== 'no' && sendData();
    }, [points, category, correctAnswers, wrongAnswers, toSave])
    
    const handleClick = () => {
        clearState();
       toSave !== "no" && clearGameDetails();
        window.location.reload(); 
    }
    return (  
        <>
            <CapitalLetterParagraph> Game finished </CapitalLetterParagraph>
            <Button login red onClick={handleClick}> Play again </Button> 
        </>
    );
}
 
const mapStateToProps = (state) => ({
    points: state.game.points,
    category: state.game.category,
    correctAnswers: state.game.correctAnswers,
    wrongAnswers: state.game.wrongAnswers
})

const mapDispatchToProps = (dispatch) => ({
    clearState: () =>  dispatch(actions.clearState())
  })

export default connect(mapStateToProps, mapDispatchToProps)(GameFinished);