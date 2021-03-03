import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';
import RealGameFetchQuestions from './RealGameFetchQuestions';
import realGameActions from '../duck/actions';

const RealGameDetails = ({categories, mode, setCategory, setMode, menuVisible, setMenuVisability}) => {

    const saveSelectedDetails = () => {
        const categoriesWithoutDuplicates = []
        for (let i = 0; i<categories.length; i++) {
            if(!categoriesWithoutDuplicates.includes(categories[i])) {
            categoriesWithoutDuplicates.push(categories[i])
            }
        }
        setCategory(categoriesWithoutDuplicates);
        setMode(mode);  
        
    }

    return (  
        <>
            <Container separate half>
                {(categories.length !== 0) && <Paragraph> Selected categories: {categories.join(", ")}</Paragraph>}
                {mode && <Paragraph> Selected mode: {mode}</Paragraph>}
                {menuVisible && <Button login red onClick={saveSelectedDetails}>Submit</Button>}
            </Container>
            {!menuVisible && <RealGameFetchQuestions/>}
        </>
    );
}
 
const mapDispatchToProps = (dispatch) => ({
    setCategory: (category) => dispatch(realGameActions.setCategory(category)),
    setMode: (mode) => dispatch(realGameActions.setMode(mode))
  }) 

export default connect (null, mapDispatchToProps)(RealGameDetails);