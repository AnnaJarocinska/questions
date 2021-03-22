import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';
import Paragraph from '../../styles/Paragraph';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Container from '../../styles/Container';
import Section from '../../styles/Section';
import Badge from '../../styles/Badge';


const Learning = () => {

  const [data, setData] = useState({ capitals: [] });
  const [continents, setContinents] = useState(
    ['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);
  // const [unvisible, setUnvisible] = useState(false);
  
  const fetchData = async () => {
  const result = await axios.post('/api/capitalsList')
    setData(result.data);
  }
  const handleBadgeClick = (e, i) => {
    let continentClicked = e.target.getAttribute('name');
    let index  = continents.indexOf(continentClicked);
    setContinents(update(continents, {$splice: [[index, 1]]}))
  }

  useEffect(() => {
      fetchData()
    }, []);

  let list = [];
    
  for (let i=0; i<continents.length; i++) { 
    let continentsKey = continents[i].replace(" ", "").replace(continents[i].charAt(0), continents[i].charAt(0).toLowerCase());
    let continentsList = {[`${continentsKey}`] : 
    [<Badge continent={continents[i]} key={continents[i]} name={continents[i]} onClick={handleBadgeClick}>{continents[i]}</Badge>]}; 
  
      for (let i=0; i<data.length; i++) { 
        let country = data[i].question.slice(28);
        let letter = data[i].goodAnswer.toUpperCase();
        let answer = `answer${letter}`;
        let capitalCity = data[i][answer];
        let continentName = data[i].continent;
        let firstLetter = continentName.charAt(0);
        let continent = continentName.replace(" ", "").replace(firstLetter, firstLetter.toLowerCase());
         
        if(continentsList[continent]!==undefined){
          continentsList[continent].push(
            <div key ={uuidv4()}>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </div>
          )
        }
      }  
      for (const value of Object.values(continentsList)) {
        list.push(
          <Section key ={uuidv4()}>
            {value}
          </Section>)
      }
    }
    return (
        <Container separate user>
          <Paragraph>Capitals list</Paragraph>
          {list}
        </Container>
      );
}

export default Learning;