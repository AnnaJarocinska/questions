import React from 'react';
import Container from '../styles/Container';
import UsersContainer from '../styles/UsersContainer';
import Badge from '../styles/Badge';

const List = ({ questions, deleteQuestion }) => {

  return (
    <Container main>
    <ul>
      {
        questions &&
          questions.length > 0 ?
          (
            questions.map(question => {
              return (
                <UsersContainer>
                <li key={question._id} onClick={() => deleteQuestion(question._id)}>
                <p>{question.newQuestion}</p>
                <Badge>{question.continent}</Badge>
               <p>{question.answerA}</p>
               <p>{question.answerB}</p>
               <p>{question.answerC}</p>
               <p>{question.answerD}</p>
               <p> {question.goodAnswer}</p>
                {/* {question.created} */}
                </li>
                </UsersContainer>
              )
            })
          )
          :
          (
            <li>No questions left</li>
          )
      }
    </ul>
    </Container>
  )
}

export default List;