import React, { useState } from 'react';
import update from 'immutability-helper';
import Container from '../../styles/Container';
import Badge from '../../styles/Badge';
import Input from '../../styles/Input';
import Label from '../../styles/Label';
import Paragraph from '../../styles/Paragraph';
import RealGameDetails from './RealGameDetails';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [selected, setSelected] = useState(false);
    const [continents, setContinents] = useState(['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);
    const [menuVisible, setMenuVisible] = useState(true);

    const removeCategoryFromContinents = (index) => {
        setContinents(update(continents, {$splice: [[index, 1]]})
          )
      }
    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name');
        const selectedId = e.target.getAttribute('id');
        setCategories([...categories, selectedCategory]);
        removeCategoryFromContinents(selectedId);
        setSelected(true);
    }
    const selectMode = (e) => {
        const selectedMode = e.target.value
        setMode(selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1));
        setSelected(true);
    }
    const menu =   <>
    <Paragraph> Select categories: </Paragraph>
        {continents.map((continent, index) => 
            <Badge 
            continent={continent}
            key={continent}
            id= {index}
            name={continent}
            onClick={selectCategory}>
           {continent} 
        </Badge>)}
    
        <Paragraph onChange={selectMode}> Select mode:
            <Label htmlFor="gameType"> <Input radio type="radio" value="all" name="gameType" />All</Label>
            <Label htmlFor="gameType"> <Input radio type="radio" value="random10"name="gameType"/>Random 10</Label>
        </Paragraph>
        </>
    
    return ( 
        <Container main>
        
           {menuVisible && menu}
            
           {selected && <RealGameDetails categories={categories} mode={mode} menuVisible={menuVisible}
           setMenuVisible={setMenuVisible} />}
        </Container>
     );
}

export default RealGameMenu;
