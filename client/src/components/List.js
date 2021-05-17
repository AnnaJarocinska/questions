import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../styles/Container';
import Badge from '../styles/Badge';
import Paragraph from '../styles/Paragraph';

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
                  <Paragraph>{question.question}</Paragraph>
                  <Badge continent={question.continent}>{question.continent}</Badge>
                  <Paragraph>{question.answerA}</Paragraph>
                  <Paragraph>{question.answerB}</Paragraph>
                  <Paragraph>{question.answerC}</Paragraph>
                  <Paragraph>{question.answerD}</Paragraph>
                  <Paragraph> {question.goodAnswer}</Paragraph>
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