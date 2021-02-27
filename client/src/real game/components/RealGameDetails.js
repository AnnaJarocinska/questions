import React from 'react';
import Container from '../../styles/Container';
import QuestionContainer from '../../styles/QuestionContainer';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';

const RealGameDetails = ({categories, mode, sendSelection}) => {
    return (  
        <Container main>
            <QuestionContainer>
                <Paragraph> Selected categories: {categories.join(", ")}</Paragraph>
                <Paragraph> Selected mode: {mode}</Paragraph>
                {(categories && mode) && <Button login red onClick={sendSelection}>Submit</Button>}
            </QuestionContainer>
        </Container>
    );
}
 
export default RealGameDetails;