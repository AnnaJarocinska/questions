import React, { useEffect } from 'react';
// import axios from 'axios';
// import OneQuestion from '../components/OneQuestion';
import Points from '../quick game/components/Points';

const Quiz = () => {

    // const [start, setStart] = useState(false);
    // const startQuiz = setStart(true);

    // const [data, setData] = useState({ question: [] });

    const fetchData = async () => {
        // const result = await axios.get('/api/question')
        // setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (  
        <>
            <Points/>
            {/* <button onClick={fetchData}>Start</button>
            <OneQuestion question={data}/> */}
        </>
    );
}
 
export default Quiz;