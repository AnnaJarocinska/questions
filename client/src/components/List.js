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
              let goodAnswer = question.goodAnswer.toUpperCase();
              let variants = ['A', 'B', 'C', 'D'];
              let answer=[];
             
              for (let i = 0; i<variants.length; i++){
                return console.log(variants[i], 'bbb')
                // answer.push(
                //   <Paragraph>
                //     {`${question.answer+variants[i]}`.includes(goodAnswer) ? 
                //     `${question.answervariants[i]}.toUpperCase()}` :
                //      `${question.answervariants[i]}` }
                //      </Paragraph>)
              
              }
              return (
                <Container list="true" key={uuidv4()}>
                  <li key={question._id} onClick={() => deleteQuestion(question._id)}>
                  <Paragraph>{question.question}</Paragraph>
                  <Badge continent={question.continent}>{question.continent}</Badge>
                  {answer}
                  {/* <Paragraph>{question.answerA.includes(question.goodAnswer.toUpperCase()) ? question.answerA.toUpperCase() : question.answerA }</Paragraph>
                  <Paragraph>{question.answerB.includes(question.goodAnswer.toUpperCase()) ? question.answerB.toUpperCase() : question.answerB }</Paragraph>
                  <Paragraph>{question.answerC.includes(question.goodAnswer.toUpperCase()) ? question.answerC.toUpperCase() : question.answerC }</Paragraph>
                  <Paragraph>{question.answerD.includes(question.goodAnswer.toUpperCase()) ? question.answerD.toUpperCase() : question.answerD }</Paragraph> */}
                  <Paragraph> {goodAnswer}</Paragraph>
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