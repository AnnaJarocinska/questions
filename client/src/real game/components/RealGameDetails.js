import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';
import RealGameFetchQuestions from './RealGameFetchQuestions';
import realGameActions from '../duck/actions';
import Badges from '../components/Badges';

const RealGameDetails = ({categories, mode, setGameDetails, menuVisible, setMenuVisability, deleteCategory}) => {

    const saveSelectedDetails = () => {
        const categoriesWithoutDuplicates = []
        for (let i = 0; i<categories.length; i++) {
            if(!categoriesWithoutDuplicates.includes(categories[i])) {
            categoriesWithoutDuplicates.push(categories[i])
            }
        }
        setGameDetails(categoriesWithoutDuplicates, mode);
        setMenuVisability();     
    }
    if(categories === "") {
        setMenuVisability(true);
    }
    return (  
        <>
        {(categories.length !== 0 || mode) &&
            <Container separate half>
                {(categories.length !== 0) &&
                <>
                    <Paragraph> Selected categories: </Paragraph>
                    <Badges list={categories} onClick={deleteCategory}/>
                </>}
                {mode && <Paragraph> Selected mode: {mode}</Paragraph>}
                {menuVisible && <Button login red onClick={saveSelectedDetails}>Submit</Button>}
            </Container>
        }
            {!menuVisible && <RealGameFetchQuestions/>}
        </>
    );
}
 
const mapDispatchToProps = (dispatch) => ({
    setGameDetails: (category, mode) => dispatch(realGameActions.setGameDetails(category, mode)),
  }) 

export default connect (null, mapDispatchToProps)(RealGameDetails);