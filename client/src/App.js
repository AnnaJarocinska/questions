import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import AddingQuestion from './views/admin/AddingQuestion';
import MoreInformation from './views/MoreInformation';
import Login from './views/Login';
import Quiz from './views/Quiz';
import NewUser from './views/NewUser';
import UserCreated from './views/UserCreated';
import Users from './views/admin/Users';
import AdminDashboard from './views/admin/AdminDashboard';
import UserDashboard from './views/userLoggedIn/UserDashboard';
import theme from './utils/theme';
import GlobalStyles from './styles/GlobalStyles';
import Wrapper from './styles/Wrapper';
import Overlay from './styles/Overlay';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navigation/>
          <Wrapper>
            <Overlay>
              <Route exact path="/" component={Home} />
              <Route path="/moreInformation" component={MoreInformation} />
              <Route path="/addingQuestion" component={AddingQuestion} />
              <Route path="/login" component={Login} />
              <Route exact path="/newUser" component={NewUser} />
              <Route path="/newUser/created" component={UserCreated} />
              <Route path="/users" component={Users} />
              <Route path="/quiz" component={Quiz} />
              <ProtectedRoute path="/admin" component={AdminDashboard} />
              <Route path="/user" component={UserDashboard} />
            </Overlay>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
