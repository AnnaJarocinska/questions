import React from 'react';
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Badge from '../../styles/Badge';

const RealGameMenu = () => {
    
    const continents = ['Africa','Asia', 'Australia', 'North America', 'South America' ]
    
    return ( 
        <>
        <Container main>
            {continents.map((continent) => 
                <Badge
                key={continent}
                name={continent}
                onClick={(e)=>{
                console.log(e.target.getAttribute('name'), 'e.target.value')}}>
                {continent} 
            </Badge>)}
            <input type="radio" value="all" name="gameType"/>All
            <input type="radio" value="random10"name="gameType"/>Random 10
            <Button login red>Start</Button>
        </Container>
        </>  
     );
}
 
export default RealGameMenu;