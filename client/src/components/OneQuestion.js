import React from 'react';

const OneQuestion = ({ question }) => {

    let currentNumber = 0
    let currentQuestion = Object.values(question)[currentNumber].newQuestion
    let currentContinent = Object.values(question)[currentNumber].continent
    let currentAnswerA = Object.values(question)[currentNumber].answerA
    let currentAnswerB = Object.values(question)[currentNumber].answerB
    let currentAnswerC = Object.values(question)[currentNumber].answerC
    let currentAnswerD = Object.values(question)[currentNumber].answerD
   
  return (
            <>
                {currentQuestion}
                {currentContinent}
                {currentAnswerA}
                {currentAnswerB}
                {currentAnswerC}
                {currentAnswerD}
            </>
        ) 
}

export default OneQuestion;