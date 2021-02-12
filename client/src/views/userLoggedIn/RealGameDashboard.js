import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from '../../styles/Button';
import realGameActions from '../../real game/duck/actions';
import RealGame from './RealGame';

const RealGameDashboard = ({categories, mode, addQuestions, drawQuestion}) => {
    
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
        .then(res => {
            if(res.data){
                console.log(res.data)
                addQuestions(res.data);
                drawQuestion();
          }})
        .catch(
            err => console.log(err)
        )
    }

    return (
        <>
        <Button login red onClick={getQuestions}> Start game </Button>
        <RealGame/>
        </>
      );
}
 
const mapDispatchToProps = (dispatch) => ({
    addQuestions : (currentQuestions) => dispatch(realGameActions.addQuestions(currentQuestions)),
    drawQuestion : () => dispatch(realGameActions.drawQuestion())
  }) 

export default connect(null, mapDispatchToProps) (RealGameDashboard);