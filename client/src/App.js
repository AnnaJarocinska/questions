import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import { ThemeProvider } from 'styled-components';
import Home from './view/components/Home';
import AddingQuestion from './view/components/admin/AddingQuestion';
import MoreInformation from './view/components/MoreInformation';
import Login from './view/components/Login';
import Quiz from './view/components/Quiz';
import NewUser from './view/components/NewUser';
import UserCreated from './view/components/UserCreated';
import Users from './view/components/admin/Users';
import AdminDashboard from './view/components/admin/AdminDashboard';
import UserDashboard from './view/components/userLoggedIn/UserDashboard';
import GameHistory from './view/components/userLoggedIn/GameHistory';
import Learning from './view/components/userLoggedIn/Learning';
import ChangePassword from './view/components/userLoggedIn/ChangePassword';
import UserDetails from './view/components/userLoggedIn/UserDetails';
import theme from './utils/theme';
import GlobalStyles from './styles/GlobalStyles';
import Wrapper from './styles/Wrapper';
import Overlay from './styles/Overlay';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';
import GameMenu from './game/components/GameMenu';
import Container from './styles/Container';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navigation/>
          <Wrapper>
            <Overlay>
              <Container main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/moreInformation" component={MoreInformation} />
                <Route path="/login" component={Login} />
                <Route exact path="/newUser" component={NewUser} />
                <Route path="/newUser/created" component={UserCreated} />
                <Route path="/quiz" component={Quiz} />
                <ProtectedRoute exact path="/user" component={UserDashboard} access="user"/>
                <ProtectedRoute path="/user/game" component={GameMenu} access="user"/>
                <ProtectedRoute path="/user/history" component={GameHistory} access="user"/>
                <ProtectedRoute exact path="/user/details" component={UserDetails} access="user"/>
                <ProtectedRoute path="/user/learning" component={Learning} access="user"/>
                <ProtectedRoute path="/user/details/changePassword" component={ChangePassword} access="user"/>
                <ProtectedRoute path="/admin" component={AdminDashboard} access="admin" />
                <ProtectedRoute path="/addingQuestion" component={AddingQuestion} access="admin" />
                <ProtectedRoute path="/users" component={Users} access="admin" />
                <Route path="/" component={Home} />
              </Switch>
              </Container>
            </Overlay>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
