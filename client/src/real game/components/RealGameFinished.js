import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import realGameActions from '../duck/actions';
import QuestionContainer from '../../styles/QuestionContainer';
import QuestionParagraph from '../../styles/QuestionParagraph';
import Button from '../../styles/Button';

const RealGameFinished = ({points, category, correctAnswers, wrongAnswers}) => {

    useEffect(() => {
        async function fetchData() {
            const content = {
            points: points,
            category: category,
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers,
            date: Date.now,
        }
       await axios.post('/user/saveGame', content)
    }
    fetchData();
    }, [points, category, correctAnswers, wrongAnswers])
    
    const handleClick = () => {
        window.location.reload(); 
    }
    return (  
        <QuestionContainer>
            <QuestionParagraph>
                Game finished
            </QuestionParagraph>
             <Button login red onClick={handleClick}> Start again </Button> 
        </QuestionContainer>
    );
}
 
const mapStateToProps = (state) => ({
    points: state.realGame.points,
    category: state.realGame.category,
    correctAnswers: state.realGame.correctAnswers,
    wrongAnswers: state.realGame.wrongAnswers,
})

const mapDispatchToProps = (dispatch) => ({
    addPoint: () =>  dispatch(realGameActions.addPoint()),
    drawQuestion: () =>  dispatch(realGameActions.drawQuestion())
  })

export default connect(mapStateToProps, mapDispatchToProps)(RealGameFinished);