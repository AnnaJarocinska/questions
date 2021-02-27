import React from 'react';
import Container from '../../styles/Container';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Button from '../../styles/Button';

const GameFinished = () => {
    
    const handleClick = () => {
        window.location.reload(); 
    }
    return (  
        <Container separate>
            <CapitalLetterParagraph>
                Game finished
            </CapitalLetterParagraph>
             <Button login red onClick={handleClick}> Start again </Button> 
        </Container>
    );
}
 
export default GameFinished;