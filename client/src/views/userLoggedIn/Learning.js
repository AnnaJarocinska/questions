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
    let africa = [<Badge continent = 'Africa'>{'Africa'}</Badge>];
    let australia = [<Badge continent = 'Australia'>{'Australia'}</Badge>];
    let asia = [<Badge continent = 'Asia'>{'Asia'}</Badge>];
    let europe = [<Badge continent = 'Europe'>{'Europe'}</Badge>];
    let northAmerica = [<Badge continent = 'North America'>{'North America'}</Badge>];
    let southAmerica = [<Badge continent = 'South America'>{'South America'}</Badge>];
    // let scope = {};
    
      
      // for (let i=0; i<continents.length; i++){
    
      //   scope['continent' + i] =[<Badge continent = {continents[i]}>{continents[i]}</Badge>] }
      
        for (let i=0; i<data.length; i++){ 

        let country = data[i].question.slice(28);
        let letter = data[i].goodAnswer.toUpperCase();
        let answer = `answer${letter}`;
        let capitalCity = data[i][answer];
        let continent = data[i].continent;
        
        if(continent === "Africa"){ 
          africa.push(
            // scope.continent0.push(
          <>
            <Paragraph center> {country} </Paragraph>
            <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
          </>
          )}

        if(continent === "Asia"){ 
          asia.push(
            // cont.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
            )}

        if(continent === "Australia"){ 
          australia.push(
            // scope.continent2.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
              )}

        if(continent === "Europe"){ 
            europe.push(
              // scope.continent3.push(// cont.push(
              <>
                <Paragraph center> {country} </Paragraph>
                <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
              </>
              )}
              
        if(continent === "North America"){ 
          northAmerica.push(
            // scope.continent4.push(
            <>
              <Paragraph center> {country} </Paragraph>
              <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
            </>
              )}

        if(continent === "South America"){ 
          southAmerica.push(
            // scope.continent5.push(
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
          
    // <Section>
    //   {scope.continent5}
    // </Section>,
         
    <Section>
      {southAmerica}
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