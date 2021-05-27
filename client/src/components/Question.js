import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewQuestionForm from './NewQuestionForm';
import List from './List';
import Button from '../styles/Button';
import Subtitle from '../styles/Subtitle';
import Container from '../styles/Container';

const Question = () => {

  const [data, setData] = useState({ questions: [] });
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    const result = await axios.get('/api/question')
    setData(result.data);
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleShowClick = () => {
    setShow(true);
  }

  const deleteQuestion = async (id) => {
    await axios.delete(`/api/question/${id}`)
    fetchData(data)
      .catch(err => console.log(err))
  }

  return (
    <>
        <Container form="true">
          <Subtitle>New question</Subtitle>
          <NewQuestionForm getQuestions={fetchData} />
          </Container>
          <Container form="true">
          <Button login red space onClick={handleShowClick}> Show all questions </Button>
          {show && <List questions={data} deleteQuestion={deleteQuestion} />}
          </Container>
   </>    
  );
}

export default Question;