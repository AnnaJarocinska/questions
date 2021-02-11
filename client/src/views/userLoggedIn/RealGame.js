import React from 'react';
import AnswerParagraph from '../../styles/AnswerParagraph';
import QuestionParagraph from '../../styles/QuestionParagraph';
import QuestionContainer from '../../styles/QuestionContainer';
import { connect } from 'react-redux';

const RealGame = ({currentQuestion}) => {

    const current = [];
    for (let [key, value] of Object.entries(currentQuestion)){
        if(key === 'question'|| key === 'answerA' || key === 'answerB' ||
         key === 'answerC' || key === 'answerD'){
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
                id={current.id}
                // onClick={handleAnswerClick}
                >
                    {value}</AnswerParagraph>)
    }}
    return ( 
    <QuestionContainer>
       {current}
    </QuestionContainer>
   );
}

const mapStateToProps = (state) => ({
    currentQuestion: state.realGame.currentQuestion,
})
export default connect(mapStateToProps, null) (RealGame);