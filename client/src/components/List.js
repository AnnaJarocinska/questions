import React from 'react';

const List = ({ questions, deleteQuestion }) => {

  console.log(questions, 'questions w list')
  return (
    <ul>
      {
        questions &&
          questions.length > 0 ?
          (
            questions.map(question => {
              return (
                <li key={question._id} onClick={() => deleteQuestion(question._id)}>
                {question.newQuestion}
                {question.continent}
               {question.answerA}
               {question.answerB}
               {question.answerC}
                {question.answerD}
                {/* {question.created} */}
                </li>
              )
            })
          )
          :
          (
            <li>No questions left</li>
          )
      }
    </ul>
  )
}

export default List;