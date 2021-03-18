import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paragraph from '../../styles/Paragraph';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Container from '../../styles/Container';
import Section from '../../styles/Section';
import Badge from '../../styles/Badge';

const Learning = () => {

  const [data, setData] = useState({ capitals: [] });
  const [continents, setContinents] = useState(
    ['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);
  const fetchData = async () => {
      const result = await axios.post('/api/capitalsList')
      setData(result.data);
    }

  useEffect(() => {
      fetchData()
    }, []);

    // let list = [];
    // let scope = {};
    // for (let i=0; i<continents.length; i++){
  
    //   scope['continent' + i] =[<Badge continent = {continents[i]}>{continents[i]}</Badge>] 
    
    let list = [];
    let continentss = {
    africa : [<Badge continent = 'Africa'>{'Africa'}</Badge>],
    australia : [<Badge continent = 'Australia'>{'Australia'}</Badge>],
    asia : [<Badge continent = 'Asia'>{'Asia'}</Badge>],
    europe : [<Badge continent = 'Europe'>{'Europe'}</Badge>],
    northAmerica : [<Badge continent = 'North America'>{'North America'}</Badge>],
    southAmerica : [<Badge continent = 'South America'>{'South America'}</Badge>]
    }
      
        for (let i=0; i<data.length; i++) { 
          let country = data[i].question.slice(28);
          let letter = data[i].goodAnswer.toUpperCase();
          let answer = `answer${letter}`;
          let capitalCity = data[i][answer];
          let continentName = data[i].continent;
          let firstLetter = continentName.charAt(0);
          let continent = continentName.replace(" ", "").replace(firstLetter, firstLetter.toLowerCase());
         
          continentss[continent].push(
              <>
                <Paragraph center> {country} </Paragraph>
                <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
              </>
              )
        }
  
  list.push(
    <Section>
      {continentss.africa}
    </Section>,

    <Section>
      {continentss.asia}
    </Section>,

    <Section>
      {continentss.australia}
    </Section>,

    <Section>
      {continentss.europe}
    </Section>,
       
    <Section>
      {continentss.northAmerica}
    </Section>,
    
    <Section>
      {continentss.southAmerica}
    </Section>
    )
    return (
        <Container separate user>
          <Paragraph>Capitals list</Paragraph>
          {list}
        </Container>
      );
}
 
export default Learning;