import React from 'react';
import axios from 'axios';
import  Button from '../../styles/Button';

const RealGameDashboard = ({categories, mode}) => {

    const content = {
        categories: categories,
        mode: mode   
    }

    const getQuestions = async () => {  
        await axios.post('api/questions', content) 
    }

    return (
        <>
        <Button login red onClick={getQuestions}> Start game </Button>
        </>
      );
}
 
export default RealGameDashboard;