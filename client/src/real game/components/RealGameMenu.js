import React, { useState } from 'react';
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Badge from '../../styles/Badge';
import RealGameDashboard from './RealGameDashboard';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [send, setSend] = useState(false);

    const continents = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America']
    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name')
        setCategories([...categories, selectedCategory])
    }
    const selectMode = (e) => {
        const selectedMode = e.target.value
        setMode(selectedMode);
    }
    const sendSelection = () => {
        setSend(true);
    }
    return ( 
        <>
        <Container main>
            <p>Select categories:</p>
            {continents.map((continent) => 
                <Badge 
                continent = {continent}
                key={continent}
                name={continent}
                onClick={selectCategory}>
                {continent} 
            </Badge>)}
            <div onChange={selectMode}>
           <label> <input type="radio" value="all" name="gameType"/>All</label>
           <label><input type="radio" value="random10"name="gameType"/>Random 10</label>
           </div>
            <Button login red onClick={sendSelection}>Start</Button>
            {send && <RealGameDashboard categories={categories} mode={mode}/>}
        </Container>
        </>  
            
     );
}

export default RealGameMenu;