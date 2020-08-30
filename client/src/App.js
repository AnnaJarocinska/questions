import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import AddingQuestion from './views/AddingQuestion';
import MoreInformations from './views/MoreInformations';
import Login from './views/Login';
import Quiz from './views/Quiz';
import NewUser from './views/NewUser';
import UserCreated from './views/UserCreated';
import Users from './views/Users';
import AdminDashboard from './views/AdminDashoard';
import theme from './utils/theme';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/moreInformations" component={MoreInformations} />
          <Route path="/addingQuestion" component={AddingQuestion} />
          <Route path="/login" component={Login} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/userCreated" component={UserCreated} />
          <Route path="/users" component={Users} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Footer/>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
