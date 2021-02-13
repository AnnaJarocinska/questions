import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import realGameActions from '../../real game/duck/actions';
import QuestionContainer from '../../styles/QuestionContainer';
import QuestionParagraph from '../../styles/QuestionParagraph';
import Button from '../../styles/Button';

const RealGameFinished = ({points, gameFinished}) => {

    useEffect(() => {
            const content = {
            points: points,
            // categories: categories,
        }
        axios.post('/user/saveGame', content)
        console.log(content, 'content w rgf')
    })
    
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
    gameFinished: state.realGame.gameFinished,
})

const mapDispatchToProps = (dispatch) => ({
    addPoint: () =>  dispatch(realGameActions.addPoint()),
    drawQuestion: () =>  dispatch(realGameActions.drawQuestion())
  })

export default connect(mapStateToProps, mapDispatchToProps)(RealGameFinished);