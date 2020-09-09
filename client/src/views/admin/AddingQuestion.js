import React from 'react';
import Question from '../../components/Question';
import NavBar from '../../components/NavBar';

const AddingQuestion = () => {
    return (
        <>
        <NavBar admin logged/>
        <Question/>
        </>
      );
}
 
export default AddingQuestion;