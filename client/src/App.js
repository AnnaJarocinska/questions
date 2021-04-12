import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import GameHistory from './views/userLoggedIn/GameHistory';
import Learning from './views/userLoggedIn/Learning';
import ChangePassword from './views/userLoggedIn/ChangePassword';
import UserDetails from './views/userLoggedIn/UserDetails';
import theme from './utils/theme';
import GlobalStyles from './styles/GlobalStyles';
import Wrapper from './styles/Wrapper';
import Overlay from './styles/Overlay';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';
import GameMenu from './game/components/GameMenu';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navigation/>
          <Wrapper>
            <Overlay>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/moreInformation" component={MoreInformation} />
                <Route  path="/login" component={Login} />
                <Route  path="/newUser" component={NewUser} />
                <Route path="/newUser/created" component={UserCreated} />
                <Route path="/quiz" component={Quiz} />
                <ProtectedRoute exact path="/user" component={UserDashboard} access="user"/>
                {/* <Route path="/game" component={RealGameMenu} access="user"/> */}
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
            </Overlay>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
