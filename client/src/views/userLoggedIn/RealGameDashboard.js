import React from 'react';
import axios from 'axios';
import  Button from '../../styles/Button';

const RealGameDashboard = ({categories, mode}) => {

    const content = {
        categories,
        mode   
    }
console.log(content, 'content')
    const getQuestions = async (categories, mode) => {
        const content = {
            categories: 'categories',
            mode: 'mode'   
        }
console.log(categories, 'categories w onclick')
        await axios.get('api/questions', content) 
    }

    return (
        <>
        <Button login red onClick={getQuestions}> Start game </Button>
        </>
      );
}
 
export default RealGameDashboard;