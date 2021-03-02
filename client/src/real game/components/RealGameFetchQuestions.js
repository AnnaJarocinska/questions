import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import realGameActions from '../duck/actions';
import RealGameWindow from './RealGameWindow';

const RealGameFetchQuestions = ({category, mode, addQuestions, drawQuestion}) => {
    
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
            <RealGameWindow startGame={getQuestions}/>
      );
}
 
const mapStateToProps = (state) => ({
    category: state.realGame.category,
    mode: state.realGame.mode,
})

const mapDispatchToProps = (dispatch) => ({
    addQuestions : (currentQuestions) => dispatch(realGameActions.addQuestions(currentQuestions)),
    drawQuestion : () => dispatch(realGameActions.drawQuestion()),
  }) 

export default connect(mapStateToProps, mapDispatchToProps) (RealGameFetchQuestions);