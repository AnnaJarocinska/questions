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
    let africa = [];
    let australia = [];
    let asia = [];
    let europe = [];
    let northAmerica = [];
    let southAmerica = [];

    for (let i=0; i<data.length; i++){
        let country = data[i].question.slice(28);
        let letter = data[i].goodAnswer.toUpperCase();
        let answer = `answer${letter}`;
        let capitalCity = data[i][answer];
        let continent = data[i].continent;
        
        if(continent === "Africa"){ 
          africa.push(
          <>
            <Paragraph center> {country} </Paragraph>
            <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
          </>
          )}

        if(continent === "Asia"){ 
          asia.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
            )}

        if(continent === "Australia"){ 
          australia.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
              )}

        if(continent === "Europe"){ 
            europe.push(
              <>
                <Paragraph center> {country} </Paragraph>
                <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
              </>
              )}
              
        if(continent === "North America"){ 
          northAmerica.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
              )}

        if(continent === "South America"){ 
          southAmerica.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
              )}
        }
  
  list.push(
    <Section>
      {africa}
    </Section>,

    <Section>
      {asia}
    </Section>,

    <Section>
      {australia}
    </Section>,
       
    <Section>
      {europe}
    </Section>,
          
    <Section>
      {northAmerica}
    </Section>,
         
    <Section>
      {southAmerica}
    </Section>
    )
        
    return (
        <Container separate>
          <Paragraph>Capitals list</Paragraph>
          {list}
        </Container>
      );
}
 
export default Learning;