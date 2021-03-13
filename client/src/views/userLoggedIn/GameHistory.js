import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../../styles/Container';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';

const GameHistory = () => {

    const [data, setData] = useState({ games: [] });

    const fetchData = async () => {
        const result = await axios.post('/user/history')
        setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    let list = [];
     if (data[0] !== undefined) {
        for (let i=0; i< data.length; i++){
            for (const key in data[i]){
                console.log(key, data[i][key])
                list.push(
                <>
                <p>{key} : {data[i][key]}</p>
                </>
                )
                ;
            }
        }}
    const gamesNumber = data.length
    return (  
        <Container separate users> 
            <CapitalLetterParagraph> Game history</CapitalLetterParagraph>
            <Paragraph>Games number: {gamesNumber}</Paragraph>
            {list}
        </Container>
    );
}
 
export default GameHistory;