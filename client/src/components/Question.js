import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewQuestionForm from './NewQuestionForm';
import List from './List';
import Wrapper from '../styles/Wrapper';
import Overlay from '../styles/Overlay';
import Container from '../styles/Container';
import Button from '../styles/Button';

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
    <Wrapper>
      <Overlay>
        <Container list>
        <Container form>
          <NewQuestionForm getQuestions={fetchData} />
           <Button login red space onClick={handleShowClick}> Show all questions </Button>
           {show && <List questions={data} deleteQuestion={deleteQuestion} />}
          </Container>
          </Container>
      </Overlay>
    </Wrapper>
  );
}

export default Question;