import React, { useState } from 'react';
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Badge from '../../styles/Badge';
import Label from '../../styles/Label';
import Input from '../../styles/Input';
import RealGameDashboard from './RealGameDashboard';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [send, setSend] = useState(false);

    const continents = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America']
    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name');
        setCategories([...categories, selectedCategory]);
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
            <Label> Select categories: </Label>
            {continents.map((continent) => 
                <Badge 
                continent = {continent}
                key={continent}
                name={continent}
                onClick={selectCategory}>
                {continent} 
            </Badge>)}
            {categories}
            <div onChange={selectMode}>
           <Label> <Input radio type="radio" value="all" name="gameType"/>All</Label>
           <Label><Input radio type="radio" value="random10"name="gameType"/>Random 10</Label>
           </div>
            <Button login red onClick={sendSelection}>Start</Button>
            {send && <RealGameDashboard categories={categories} mode={mode}/>}
        </Container>
        </>  
            
     );
}

export default RealGameMenu;