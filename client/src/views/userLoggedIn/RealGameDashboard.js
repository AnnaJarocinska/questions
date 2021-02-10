import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from '../../styles/Button';
import realGameActions from '../../real game/duck/actions';

const RealGameDashboard = ({categories, mode, addQuestions}) => {
    
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
                addQuestions(res.data)
          }})
        .catch(
            err => console.log(err)
        )
    }

    return (
        <>
        <Button login red onClick={getQuestions}> Start game </Button>
        </>
      );
}
 
const mapDispatchToProps = (dispatch) => ({
    addQuestions : (questions) => dispatch(realGameActions.addQuestions(questions))
  }) 

export default connect(null, mapDispatchToProps) (RealGameDashboard);