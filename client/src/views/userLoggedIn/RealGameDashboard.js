import React from 'react';
import axios from 'axios';
import Button from '../../styles/Button';

const RealGameDashboard = ({categories, mode}) => {
    
    const categoriesWithoutDuplicates = []
    for (let i = 0; i<categories.length; i++) {
        if(!categoriesWithoutDuplicates.includes(categories[i])) {
        categoriesWithoutDuplicates.push(categories[i])
        }
    }
    const selectedCategories = categoriesWithoutDuplicates.join(", ");

    const content = {
        categories: selectedCategories,
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