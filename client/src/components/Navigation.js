import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../styles/Container';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <Container>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addingQuestion">Adding question</Link>
                    </li>    
                    <li>
                        <Link to="/login">Login</Link>
                    </li>   
                    <li>
                        <Link to="/newUser">Add new user</Link>
                    </li>  
                    <li>
                        <Link to="/userCreated">user created</Link>
                    </li> 
                    <li>
                        <Link to="/users">Users</Link>
                    </li>   
                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>   
                    <li>
                        <Link to="/adminDashboard">admin dashboard</Link>
                    </li>  
                </Container>    
            </ul>  
        </nav>
     );
}
 
export default Navigation;