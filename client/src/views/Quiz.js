import React from 'react';
import { connect } from 'react-redux';
import GameFetchQuestions from '../game/components/GameFetchQuestions';
import actions from '../game/duck/actions';
import Container from '../styles/Container';

const Quiz = ({setGameDetails}) => {
    const category = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America'];
    const mode = 'Random10';
    const toSave = 'no';
    setGameDetails(category, mode)
    return (  
        <Container main>
            <GameFetchQuestions category={category} mode={mode} toSave={toSave}/>
        </Container>
    );
}
const mapDispatchToProps = (dispatch) => ({
    setGameDetails: (category, mode) => dispatch(actions.setGameDetails(category, mode)),
  }) 

export default connect (null, mapDispatchToProps)(Quiz);