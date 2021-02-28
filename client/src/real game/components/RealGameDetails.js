import React, { useState } from 'react';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';
import RealGameDashboard from './RealGameDashboard';

const RealGameDetails = ({categories, mode, sendSelection, }) => {
   
    
    return (  
        <>
        <Container separate half>
            {categories && <Paragraph> Selected categories: {categories.join(", ")}</Paragraph>}
            {mode && <Paragraph> Selected mode: {mode}</Paragraph>}
            <Button login red onClick={sendSelection}>Submit</Button>
            
        </Container>
        <RealGameDashboard categories={categories} mode={mode}/>
        </>
    );
}
 
export default RealGameDetails;