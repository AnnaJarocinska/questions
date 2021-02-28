import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import Button from '../../styles/Button';
import realGameActions from '../duck/actions';
import RealGameWindow from './RealGameWindow';

const RealGameDashboard = ({categories, mode,
    addQuestions, drawQuestion, setCategory}) => {
    
    const categoriesWithoutDuplicates = []
    for (let i = 0; i<categories.length; i++) {
        if(!categoriesWithoutDuplicates.includes(categories[i])) {
        categoriesWithoutDuplicates.push(categories[i])
        }
    }
    const selectedCategories = categoriesWithoutDuplicates.join(", ");
    setCategory(selectedCategories);
    
    const content = {
        categories: categoriesWithoutDuplicates,
        mode: mode   
    }
    const getQuestions = async () => {   
        await axios.post('/api/questions', content) 
        .then(res => {
            if(res.data){
                addQuestions(res.data);
                drawQuestion();
          }})
        .catch(
            err => console.log(err)
        )
    }

    return (
        <>
        {/* <Button login red onClick={getQuestions}> Start game </Button> */}
        <RealGameWindow startGame={getQuestions}/>
        </>
      );
}
 
const mapDispatchToProps = (dispatch) => ({
    addQuestions : (currentQuestions) => dispatch(realGameActions.addQuestions(currentQuestions)),
    drawQuestion : () => dispatch(realGameActions.drawQuestion()),
    setCategory: (category) => dispatch(realGameActions.setCategory(category))
  }) 

export default connect(null, mapDispatchToProps) (RealGameDashboard);