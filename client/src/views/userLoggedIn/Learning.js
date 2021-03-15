import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paragraph from '../../styles/Paragraph';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Container from '../../styles/Container';
import Section from '../../styles/Section';

const Learning = () => {

  const [data, setData] = useState({ capitals: [] });

    const fetchData = async () => {
        const result = await axios.post('/api/capitalsList')
        setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    let list = [];
    for (let i=0; i<data.length; i++){
        let country = data[i].question.slice(28);
        let letter = data[i].goodAnswer.toUpperCase();
        let answer = `answer${letter}`;
        let capitalCity = data[i][answer];
        let continent = data[i].continent;
        let continentSection = [];
        
        if(continent === "Europe"){ 
        continentSection.push(
          <Section>
            <Paragraph center> {country} </Paragraph>
            <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
          </Section>)
  
  list.push(continentSection)
        }}
    return (
        <Container separate>
          <Paragraph>Capitals list</Paragraph>
          {list}
        </Container>
      );
}
 
export default Learning;