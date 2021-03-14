import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../../styles/Container';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';
import Section from '../../styles/Section';

const GameHistory = () => {

    const [data, setData] = useState({ games: [] });

    const fetchData = async () => {
        const result = await axios.post('/user/history')
        setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);
    const gamesNumber = data.length
    let list = [];
     if (data[0] !== undefined) {
        for (let i=0; i< gamesNumber; i++){
            let item = [];
            for (const key in data[i]){
                item.push(
                    <li> <Paragraph>{key} : {data[i][key]}</Paragraph> </li>
                )
                ;
            }
            list.push(<Section><ul>{i+1}{item}</ul></Section>)
        }}
    return (  
        <Container separate left> 
            <CapitalLetterParagraph> Game history</CapitalLetterParagraph>
            <Paragraph>Games number: {gamesNumber}</Paragraph>
           {list}
        </Container>
    );
}
 
export default GameHistory;