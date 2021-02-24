import React from 'react';
import Container from '../../styles/Container';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';

const RealGameDetails = ({categories, mode}) => {
    return (  
        <Container main>
            <CapitalLetterParagraph> Selected categories: {categories}</CapitalLetterParagraph>
            <CapitalLetterParagraph> Selected mode: {mode}</CapitalLetterParagraph>
        </Container>
    );
}
 
export default RealGameDetails;