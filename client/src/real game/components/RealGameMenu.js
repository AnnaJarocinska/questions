import React, { useState } from 'react';
import update from 'immutability-helper'
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Badge from '../../styles/Badge';
import Input from '../../styles/Input';
import Pargraph from '../../styles/Paragraph';
import RealGameDashboard from './RealGameDashboard';
import RealGameDetails from './RealGameDetails';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [send, setSend] = useState(false);
    const [continents, setContinents] = useState(['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);
   
    const removeCategory = (index) => {
        setContinents(update(continents, {$splice: [[index, 1]]})
          )
      }
    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name');
        const selectedId = e.target.getAttribute('id');

        setCategories([...categories, selectedCategory]);
        removeCategory(selectedId)
    }
    const selectMode = (e) => {
        const selectedMode = e.target.value
        setMode(selectedMode);
    }
    const sendSelection = () => {
        setSend(true);
    }
    
    return ( 
        <Container main>
            <Pargraph> Select categories: </Pargraph>
            {continents.map((continent, index) => 
                <Badge 
                continent={continent}
                key={continent}
                id= {index}
                name={continent}
                onClick={selectCategory}>
               {continent} 
            </Badge>)}
            <RealGameDetails categories={categories} mode={mode}></RealGameDetails>
            <div onChange={selectMode}>
           <Pargraph> <Input radio type="radio" value="all" name="gameType"/>All</Pargraph>
           <Pargraph><Input radio type="radio" value="random10"name="gameType"/>Random 10</Pargraph>
           </div>
            <Button login red onClick={sendSelection}>Submit</Button>
            {send && <RealGameDashboard categories={categories} mode={mode}/>}
        </Container>
     );
}

export default RealGameMenu;
