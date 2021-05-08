import React from 'react';
import { connect } from 'react-redux';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';
import Button from '../../styles/Button';
import Label from '../../styles/Label';
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
    const unclickable = !menuVisible ? true : false
    return (  
        <>
        {(categories.length !== 0 || mode) &&
            <Container strap transparent = {unclickable}>
                {(categories.length !== 0) &&
                <Container wrap>
                    <Paragraph medium> Selected categories: </Paragraph>
                    <Badges list={categories} onClick={menuVisible && deleteCategory} unclickable={unclickable}/>
                </Container>}
                {mode && <Paragraph medium> Selected mode: <Label radio unclickable={unclickable}>{mode}</Label></Paragraph>}
                {((categories.length !== 0 && mode) && menuVisible) && 
                <Container basis ><Button login red space onClick={saveSelectedDetails}>Submit</Button></Container>}
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