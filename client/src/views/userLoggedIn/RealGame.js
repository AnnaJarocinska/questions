import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import realGameActions from '../../real game/duck/actions';
import AnswerParagraph from '../../styles/AnswerParagraph';
import QuestionParagraph from '../../styles/QuestionParagraph';
import QuestionContainer from '../../styles/QuestionContainer';


const RealGame = ({currentQuestion, addPoint}) => {

    const handleAnswer = (e) => {
        let index = e.target.getAttribute('name').length -1
        let letter = e.target.getAttribute('name').charAt(index).toLowerCase()
        const content = {
            userAnswer: letter,
            questionId: currentQuestion._id,
        }
        const checkAnswer = async () => {  
            await axios.post('api/checkAnswer', content) 
            .then(res => {
                if(res.data === "goodAnswer") {
                    addPoint();
                } 
                if(res.data === "wrongAnswer") {
                    console.log('wrong answer')
                }
            })
            .catch (
                err => console.log(err)
            )
        }
        checkAnswer()
    }
    const current = [];
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
                onClick={handleAnswer}>
                    {value}</AnswerParagraph>)
    } 
}
    return ( 
    <QuestionContainer>
       {current}
    </QuestionContainer>
   );
}

const mapStateToProps = (state) => ({
    currentQuestion: state.realGame.currentQuestion,
})

const mapDispatchToProps = (dispatch) => ({
    addPoint: () =>  dispatch(realGameActions.addPoint())
  })

export default connect(mapStateToProps, mapDispatchToProps) (RealGame);