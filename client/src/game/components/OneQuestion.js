import React from 'react';
import { connect } from 'react-redux'

const OneQuestion = ({randomQuestion}) => {


    let goodAnswer = randomQuestion.goodAnswer;

    const handleAnswerClick = (e) => {
        let index = e.target.getAttribute('name').length -1
        let letter = e.target.getAttribute('name').charAt(index).toLowerCase()
if(letter === goodAnswer) {
    console.log('good answer')
}else{
    console.log('bad answer')
}
    }

    const currentQuestion = [];
    for (let [key, value] of Object.entries(randomQuestion)){
        if(key === 'question'|| key === 'answerA' || key === 'answerB' || key === 'answerC' || key === 'answerD'){
        currentQuestion.push(
                <p
                key={value} 
                name= {key}
                onClick={handleAnswerClick}>
                    {value}</p>)
    }}


console.log(goodAnswer, 'goodAnswer')

    return ( 
        <>
           <p>{currentQuestion}</p>
        </>
     );
}

 
const mapStateToProps = (state) => ({
    randomQuestion: state.game.randomQuestion,
  })

export default connect(mapStateToProps, null)(OneQuestion);