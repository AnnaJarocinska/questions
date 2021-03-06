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

    console.log(data, 'data w gamehistory')
    const gamesNumber = data.length
    return (  
        <Container separate users> 
            <CapitalLetterParagraph> Game history</CapitalLetterParagraph>
            <Paragraph>Games number: {gamesNumber}</Paragraph>
        </Container>
    );
}
 
export default GameHistory;