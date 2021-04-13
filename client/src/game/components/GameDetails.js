import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';
import GameFetchQuestions from './GameFetchQuestions';
import actions from '../duck/actions';
import Badges from '../../components/Badges';

const GameDetails = ({categories, mode, menuVisible,
    setGameDetails, setMenuVisability, deleteCategory, clearGameDetails}) => {

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
                {((categories.length !== 0 && mode) && menuVisible) && <Button login red onClick={saveSelectedDetails}>Submit</Button>}
            </Container>
        }
            {!menuVisible && <GameFetchQuestions clearGameDetails={clearGameDetails}/>}
        </>
    );
}
 
const mapDispatchToProps = (dispatch) => ({
    setGameDetails: (category, mode) => dispatch(actions.setGameDetails(category, mode)),
  }) 

export default connect (null, mapDispatchToProps)(GameDetails);