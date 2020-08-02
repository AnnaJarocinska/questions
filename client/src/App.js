import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './views/Home';
import AddingQuestion from './views/AddingQuestion';
import Login from './views/Login';
import Quiz from './views/Quiz';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route path="/addingQuestion" component={AddingQuestion} />
      <Route path="/login" component={Login} />
      <Route path="/quiz" component={Quiz} />
    </div>
    </Router>
  );
}

export default App;
