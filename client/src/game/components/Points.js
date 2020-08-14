import React from 'react';
import { connect } from 'react-redux';

const Points = ({points}) => {
    return ( 
        <>
            <div>    
                <p>Points: {points}</p>
            </div>
        </>
     );
}
 
const mapStateToProps = (state) => ({
    points: state.game.points, 
  })
  

export default connect(mapStateToProps, null)(Points);