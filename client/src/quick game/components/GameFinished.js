import React from 'react';
import QuestionContainer from '../../styles/QuestionContainer';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Button from '../../styles/Button';

const GameFinished = () => {
    
    const handleClick = () => {
        window.location.reload(); 
    }
    return (  
        <QuestionContainer>
            <CapitalLetterParagraph>
                Game finished
            </CapitalLetterParagraph>
             <Button login red onClick={handleClick}> Start again </Button> 
        </QuestionContainer>
    );
}
 
export default GameFinished;