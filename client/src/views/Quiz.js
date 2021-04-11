import React from 'react';
import { connect } from 'react-redux';
import RealGameFetchQuestions from '../real game/components/RealGameFetchQuestions';
import realGameActions from '../real game/duck/actions';

const Quiz = ({setGameDetails}) => {
    const category = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America'];
    const mode = 'Random10';
    const toSave = 'no';
    setGameDetails(category, mode)
    return (  
        <>
            <p>quick game</p>
            <RealGameFetchQuestions category={category} mode={mode} toSave={toSave}/>
        </>
    );
}
const mapDispatchToProps = (dispatch) => ({
    setGameDetails: (category, mode) => dispatch(realGameActions.setGameDetails(category, mode)),
  }) 

export default connect (null, mapDispatchToProps)(Quiz);