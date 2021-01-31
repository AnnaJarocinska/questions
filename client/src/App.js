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
import theme from './utils/theme';
import GlobalStyles from './styles/GlobalStyles';
import Wrapper from './styles/Wrapper';
import Overlay from './styles/Overlay';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';

// const Admin = () => {
//   return(
//               <Switch>
//                 <ProtectedRoute exact path="/admin" component={AdminDashboard} />
//                 <ProtectedRoute path="/admin/addingQuestion" component={AddingQuestion} />
//                 <ProtectedRoute path="/admin/users" component={Users} />
//                 <ProtectedRoute  component={AdminDashboard} />
//               </Switch>
//   )
// }

const App = () => {
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
                <Route path="/login" component={Login} />
                <Route exact path="/newUser" component={NewUser} />
                <Route path="/newUser/created" component={UserCreated} />
                <ProtectedRoute path="/user" component={UserDashboard} access="user"/>
                <Route path="/quiz" component={Quiz} />
                <Switch>
                <ProtectedRoute exact path="/admin" component={AdminDashboard} access="admin" />
                <ProtectedRoute path="/addingQuestion" component={AddingQuestion} access="admin" />
                <ProtectedRoute path="/users" component={Users} access="admin" />
                <ProtectedRoute  component={AdminDashboard} access="admin"/>
                <Route exact path="/" component={Home} />
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
