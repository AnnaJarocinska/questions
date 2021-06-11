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
              let correctAnswer = question.correctAnswer.toUpperCase();
              let variants = ['answerA', 'answerB', 'answerC', 'answerD'];
              let answers = [];
              for (let i = 0; i<variants.length; ++i) {
               let answer = question[variants[i].toString()];
                answers.push(
                    variants[i].includes(correctAnswer)
                    ? 
                    <Paragraph key={uuidv4()}>
                    {answer.toUpperCase()} 
                    </Paragraph>
                    :
                    <Paragraph key={uuidv4()}>
                     {answer}
                     </Paragraph>
                     )
              }
              return (
                <Container list="true" key={uuidv4()}>
                  <li key={question._id} onClick={() => deleteQuestion(question._id)}>
                    <Paragraph>{question.question}</Paragraph>
                    <Badge continent={question.continent}> {question.continent} </Badge>
                    {answers}
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