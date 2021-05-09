import React, { useState } from 'react';
import update from 'immutability-helper';
import Container from '../../styles/Container';
import Input from '../../styles/Input';
import Label from '../../styles/Label';
import Paragraph from '../../styles/Paragraph';
import GameDetails from './GameDetails';
import Badges from '../../components/Badges';

const GameMenu = () => {
    
    const [continents, setContinents] = useState(['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [selected, setSelected] = useState(false);
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
    const removeCategoryFromCategories = (index) => {
        setCategories(update(categories, {$splice: [[index, 1]]})
          )
      }
    const deleteCategory = (e) => {
        const deletedId = e.target.getAttribute('id'); 
        const deletedCategory = e.target.getAttribute('name'); 
        removeCategoryFromCategories(deletedId); 
        setContinents([...continents, deletedCategory].sort()); 
    }
    const setMenuVisability = () => {
        setMenuVisible(false);
    }
    const clearGameDetails = () => {
        setCategories([]);
        setMode('');
    }
    const menu = <>
        {continents.length !== 0 && <Paragraph> Select categories: </Paragraph>}
        <Badges list={continents} onClick={selectCategory}/>
        <Paragraph> Select mode:
             <Input radio checked={mode === 'All' ? true : false}
            onChange={selectMode}
            type="radio" value="all" id="all" name="gameType" /> <Label radio htmlFor="all"> All</Label>
             <Input radio checked={mode === 'Random10' ? true : false}
             onChange={selectMode}
            type="radio" value="random10" id="random10" name="gameType"/> <Label radio htmlFor="random10">Random 10</Label>
        </Paragraph>
    </>
    return ( 
        <Container main>
           {menuVisible && menu}
           {selected && <GameDetails categories={categories} mode={mode}
            deleteCategory={deleteCategory} clearGameDetails={clearGameDetails}
            menuVisible={menuVisible} setMenuVisability={setMenuVisability}/>}
        </Container>
     );
}

export default GameMenu;
