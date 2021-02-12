import React, { useEffect } from 'react';
import axios from 'axios';
import QuestionContainer from '../../styles/QuestionContainer';
import QuestionParagraph from '../../styles/QuestionParagraph';
import Button from '../../styles/Button';

const RealGameFinished = () => {

    useEffect(() => {
        const content = {
            // points: points,
            // categories: categories,
        }
        axios.post('/users/saveGame', content)
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
 
export default RealGameFinished;