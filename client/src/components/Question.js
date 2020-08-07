import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import List from './List';

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
    <div>
      <h1>My questions</h1>
      <Input getQuestions={fetchData} />
      <List questions={data} deleteQuestion={deleteQuestion} />
    </div>
  );
}

export default Question;