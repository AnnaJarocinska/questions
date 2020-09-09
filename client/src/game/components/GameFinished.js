import React from 'react';
import QuestionContainer from '../../styles/QuestionContainer';
import QuestionParagraph from '../../styles/QuestionParagraph';
import Button from '../../styles/Button';

const GameFinished = () => {
    
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
 
export default GameFinished;