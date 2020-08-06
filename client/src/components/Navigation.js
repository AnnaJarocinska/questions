import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
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
                    <Link to="/quiz">Quiz</Link>
                </li>        
            </ul> 
        </nav>
     );
}
 
export default Navigation;