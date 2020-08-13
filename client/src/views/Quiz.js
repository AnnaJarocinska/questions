import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OneQuestion from '../components/OneQuestion'

const Quiz = () => {

    // const [start, setStart] = useState(false);
    // const startQuiz = setStart(true);

    const [data, setData] = useState({ question: [] });

    const fetchData = async () => {
        const result = await axios.get('/api/question')
        setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (  
        <>
        <p>Quiz</p>
        <button onClick={fetchData}>Start</button>
        <OneQuestion question={data}/>
        </>
    );
}
 
export default Quiz;