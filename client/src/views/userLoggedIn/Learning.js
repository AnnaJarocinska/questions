import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paragraph from '../../styles/Paragraph';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Container from '../../styles/Container';
import Section from '../../styles/Section';
import Badge from '../../styles/Badge';

const Learning = () => {

  const [data, setData] = useState({ capitals: [] });
  const continents = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America'];
  const fetchData = async () => {
      const result = await axios.post('/api/capitalsList')
      setData(result.data);
    }

  useEffect(() => {
      fetchData()
    }, []);

  let list = [];
    
  for (let i=0; i<continents.length; i++) { 
    let cont = continents[i];
    let rr = cont.replace(" ", "").replace(cont.charAt(0), cont.charAt(0).toLowerCase());
    let continentsList = {[`${rr}`] : [<Badge continent = {cont}>{cont}</Badge>]}; 
    
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
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
          )
        }
      }  
      for (const value of Object.values(continentsList)) {
        list.push(
          <Section>
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