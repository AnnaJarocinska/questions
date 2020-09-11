import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewQuestionForm from './NewQuestionForm';
import List from './List';
import Wrapper from '../styles/Wrapper';
import Overlay from '../styles/Overlay';
import Container from '../styles/Container';

const Question = () => {

  const [data, setData] = useState({ questions: [] });

  const fetchData = async () => {
    const result = await axios.get('/api/question')
    setData(result.data);
  }

  useEffect(() => {
    fetchData()
  }, []);

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
          </Container>
          <Container form>
          <List questions={data} deleteQuestion={deleteQuestion} />
          </Container>
          </Container>
      </Overlay>
    </Wrapper>
  );
}

export default Question;