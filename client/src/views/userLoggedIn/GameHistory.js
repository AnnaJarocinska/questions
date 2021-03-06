import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../../styles/Container';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';

const GameHistory = () => {

    const [data, setData] = useState({ games: [] });

    const fetchData = async () => {
        const result = await axios.get('/user/history')
        setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (  
        <Container separate users> 
            <CapitalLetterParagraph> Game history</CapitalLetterParagraph>
        </Container>
    );
}
 
export default GameHistory;