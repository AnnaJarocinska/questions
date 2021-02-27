import React, { useState } from 'react';
import update from 'immutability-helper'
import Container from '../../styles/Container';
import Badge from '../../styles/Badge';
import Input from '../../styles/Input';
import Label from '../../styles/Label';
import Pargraph from '../../styles/Paragraph';
import RealGameDashboard from './RealGameDashboard';
import RealGameDetails from './RealGameDetails';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [send, setSend] = useState(false);
    const [selected, setSelected] = useState(false);
    const [continents, setContinents] = useState(['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);
   
    const removeCategory = (index) => {
        setContinents(update(continents, {$splice: [[index, 1]]})
          )
      }
    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name');
        const selectedId = e.target.getAttribute('id');

        setCategories([...categories, selectedCategory]);
        removeCategory(selectedId);
        setSelected(true);
    }
    const selectMode = (e) => {
        const selectedMode = e.target.value
        setMode(selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1));
        setSelected(true);
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
           
            <div onChange={selectMode}>
                <Pargraph> Select mode: </Pargraph>
                <Pargraph><Label> <Input radio type="radio" value="all" name="gameType"/>All</Label></Pargraph>
                <Pargraph><Label><Input radio type="radio" value="random10"name="gameType"/>Random 10</Label></Pargraph>
           </div>
           {selected && <RealGameDetails categories={categories} mode={mode} sendSelection={sendSelection}></RealGameDetails>}
            {send && <RealGameDashboard categories={categories} mode={mode}/>}
        </Container>
     );
}

export default RealGameMenu;
