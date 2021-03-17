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
    // let scope = {};
    
      
      // for (let i=0; i<continents.length; i++){
    
      //   scope['continent' + i] =[<Badge continent = {continents[i]}>{continents[i]}</Badge>] }
      
        for (let i=0; i<data.length; i++){ 

        let country = data[i].question.slice(28);
        let letter = data[i].goodAnswer.toUpperCase();
        let answer = `answer${letter}`;
        let capitalCity = data[i][answer];
        let continent = data[i].continent;
        

        console.log(continentss.europe, 'continentss[0]' )
        if(continent === continents[i]){ 
          let con = continents[i].toLowerCase()
          console.log(continentss.europe[0], 'con')
          // con.push(
          // <>
          //   <Paragraph center> {country} </Paragraph>
          //   <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
          // </>
          // )
        }

        // if(continent === "Africa"){ 
        //   africa.push(
        //     // scope.continent0.push(
        //   <>
        //     <Paragraph center> {country} </Paragraph>
        //     <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
        //   </>
        //   )}

        // if(continent === "Asia"){ 
        //   asia.push(
        //     // cont.push(
        //     <>
        //       <Paragraph center> {country} </Paragraph>
        //       <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
        //     </>
        //     )}

        // if(continent === "Australia"){ 
        //   australia.push(
        //     // scope.continent2.push(
        //     <>
        //       <Paragraph center> {country} </Paragraph>
        //       <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
        //     </>
        //       )}

        // if(continent === "Europe"){ 
        //     europe.push(
        //       // scope.continent3.push(// cont.push(
        //       <>
        //         <Paragraph center> {country} </Paragraph>
        //         <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
        //       </>
        //       )}
              
        // if(continent === "North America"){ 
        //   northAmerica.push(
        //     // scope.continent4.push(
        //     <>
        //       <Paragraph center> {country} </Paragraph>
        //       <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
        //     </>
        //       )}

        // if(continent === "South America"){ 
        //   southAmerica.push(
        //     // scope.continent5.push(
        //     <>
        //       <Paragraph center> {country} </Paragraph>
        //       <CapitalLetterParagraph> {capitalCity} </CapitalLetterParagraph>
        //     </>
        //       )}
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
          
    // <Section>
    //   {scope.continent5}
    // </Section>,
         
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