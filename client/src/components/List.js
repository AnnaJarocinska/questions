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
              let variants = ['answerA', 'answerB', 'answerC', 'answerD'];
              let answer=[];
             
              for (let i = 0; i<variants.length; i++){
               let mix= variants[i].toString();
               let quest = question+"."+variants[i]
               console.log(`question.${variants[i]}`, 'variantsi')
                // answer.push(
                //   <Paragraph>
                //     {quest.includes(goodAnswer)}
                //     ? 
                //     {question.variants[i].toUpperCase()} :
                //      {`${question}.${variants[i]}` }
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