import React from 'react';
import { connect } from 'react-redux';
import RealGameMenu from './RealGameMenu';
import RealGameFinished from './RealGameFinished';


const RealGame = ({gameFinished}) => {
    return ( 
        <>
        {!gameFinished ? <RealGameMenu/> : <RealGameFinished/>}
        </>
     );
}

const mapStateToProps = (state) => ({
    gameFinished: state.realGame.gameFinished
})
 
export default connect(mapStateToProps, null) (RealGame);