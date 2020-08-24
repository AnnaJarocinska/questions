import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './views/Home';
import AddingQuestion from './views/AddingQuestion';
import Login from './views/Login';
import Quiz from './views/Quiz';
import NewUser from './views/NewUser';
import UserCreated from './views/UserCreated';
import Users from './views/Users';
import AdminDashboard from './views/AdminDashoard';
import theme from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navigation/>
          <Route exact path="/" component={Home} />
          <Route path="/addingQuestion" component={AddingQuestion} />
          <Route path="/login" component={Login} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/userCreated" component={UserCreated} />
          <Route path="/users" component={Users} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/adminDashboard" component={AdminDashboard} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
