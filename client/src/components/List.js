import React from 'react';

const List = ({ questions, deleteQuestion }) => {

  return (
    <ul>
      {
        questions &&
          questions.length > 0 ?
          (
            questions.map(question => {
              return (
                <li key={question._id} onClick={() => deleteQuestion(question._id)}>{question.action}</li>
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