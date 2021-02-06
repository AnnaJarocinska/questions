import React from 'react';
import Container from '../../styles/Container';
import Badge from '../../styles/Badge';
import Button from '../../styles/Button';

const RealGameMenu = () => {
    return ( 
        <>
        <Container main>
            <Badge>Africa</Badge>
            <Badge>Asia</Badge>
            <Badge>Australia</Badge>
            <Badge>North America</Badge>
            <Badge>South America</Badge>
            <Badge>All</Badge>
            <Badge>Random 10</Badge>
            <Button login red>Start</Button>
        </Container>
        </>  
     );
}
 
export default RealGameMenu;