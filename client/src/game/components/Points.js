import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../duck/operations';

const Points = ({points, questions, question, getQuestions}) => {

    useEffect(() => {getQuestions()}, [])

const questionList = []

 Object.entries(questions).map((element) => {
     console.log(element[1], 'element')
    Object.values(element[1]).forEach( item => {
        const oneQuestion = <p>{item}</p>
        questionList.push(oneQuestion)
    })
})

    

    return ( 
        <>
            <div>    
                <p>Points: {points}</p>
                <p>Questions: {questionList}</p>
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
    })
  

export default connect(mapStateToProps, mapDispatchToProps)(Points);