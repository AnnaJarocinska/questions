import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../duck/operations';


const Points = ({points, questions, getQuestions}) => {

    useEffect(() => {getQuestions()}, [])
    console.log(
    questions, 'questions')

    return ( 
        <>
            <div>    
                <p>Points: {points}</p>
                <p>Questions: {questions}</p>
            </div>
        </>
     );
}
 
const mapStateToProps = (state) => ({
    points: state.game.points, 
    questions: state.game.questions,
  })

  const mapDispatchToProps = dispatch => ({
      getQuestions: () => dispatch(getQuestions())

      }
  )
  

export default connect(mapStateToProps, mapDispatchToProps)(Points);