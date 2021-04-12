import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import GameWindow from './GameWindow';

const GameFetchQuestions = ({category, mode, addQuestions, drawQuestion, clearGameDetails, toSave
}) => {
    
    const content = {
        categories: category, 
        mode: mode   
    }
    const getQuestions = async () => {   
        await axios.post('/api/questions', content) 
        .then(res => {
            if(res.data){
                addQuestions(res.data);
                drawQuestion();
          }})
        .catch(
            err => console.log(err)
        )
    }

    return (
            <GameWindow startGame={getQuestions} 
            clearGameDetails={clearGameDetails}
            toSave={toSave}
            />
      );
}
 
const mapStateToProps = (state) => ({
    category: state.game.category,
    mode: state.game.mode,
})

const mapDispatchToProps = (dispatch) => ({
    addQuestions : (currentQuestions) => dispatch(actions.addQuestions(currentQuestions)),
    drawQuestion : () => dispatch(actions.drawQuestion()),
  }) 

export default connect(mapStateToProps, mapDispatchToProps) (GameFetchQuestions);