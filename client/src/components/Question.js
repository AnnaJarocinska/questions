import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import List from './List';

class Question extends Component {

  state = {
    questions: []
  }

  componentDidMount(){
    this.getQuestions();
  }

  getQuestions = () => {
    axios.get('/api/question')
      .then(res => {
        if(res.data){
          this.setState({
            questions: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteQuestion = (id) => {

    axios.delete(`/api/question/${id}`)
      .then(res => {
        if(res.data){
          this.getQuestions()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { questions } = this.state;

    return(
      <div>
        <h1>My questions</h1>
        <Input getQuestions={this.getQuestions}/>
        <List questions={questions} deleteQuestion={this.deleteQuestion}/>
      </div>
    )
  }
}

export default Question;