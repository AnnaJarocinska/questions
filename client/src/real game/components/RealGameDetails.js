import React from 'react';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';

const RealGameDetails = ({categories, mode, sendSelection}) => {
    return (  
        <Container separate half>
            <Paragraph> Selected categories: {categories.join(", ")}</Paragraph>
            <Paragraph> Selected mode: {mode}</Paragraph>
            {(categories && mode) && <Button login red onClick={sendSelection}>Submit</Button>}
        </Container>
    );
}
 
export default RealGameDetails;