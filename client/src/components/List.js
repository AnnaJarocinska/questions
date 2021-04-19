import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../styles/Container';
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
                <Container list="true" key={uuidv4()}>
                <li key={question._id} onClick={() => deleteQuestion(question._id)}>
                <p>{question.question}</p>
                <Badge>{question.continent}</Badge>
               <p>{question.answerA}</p>
               <p>{question.answerB}</p>
               <p>{question.answerC}</p>
               <p>{question.answerD}</p>
               <p> {question.goodAnswer}</p>
                </li>
                </Container>
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