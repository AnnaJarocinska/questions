import React, { useState } from 'react';
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Badge from '../../styles/Badge';
import RealGameDashboard from './RealGameDashboard';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');

    const continents = ['Africa','Asia', 'Australia', 'North America', 'South America']
    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name')
        setCategories([...categories, selectedCategory])
    }
    const selectMode = (e) => {
        const selectedMode = e.target.value
        setMode(selectedMode)
    }

    return ( 
        <>
        <Container main>
            {continents.map((continent) => 
                <Badge
                key={continent}
                name={continent}
                onClick={selectCategory}>
                {continent} 
            </Badge>)}
            <div onChange={selectMode}>
           <label> <input type="radio" value="all" name="gameType"/>All</label>
           <label><input type="radio" value="random10"name="gameType"/>Random 10</label>
           </div>
            <Button login red>Start</Button>
            <RealGameDashboard categories={categories} mode={mode}/>
        </Container>
        </>  
     );
}
 
export default RealGameMenu;