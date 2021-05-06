import React from 'react';
import { Link } from 'react-router-dom';
import Paragraph from '../../../styles/Paragraph';

const UserNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Paragraph clickable>
                        <Link to="/user/game">Play</Link>
                    </Paragraph>    
                </li> 
                <li>
                    <Paragraph clickable>
                        <Link to="/user/history">Game history</Link>
                    </Paragraph>    
                </li> 
                <li>
                    <Paragraph clickable>
                        <Link to="/user/details">User details</Link>
                    </Paragraph>    
                </li> 
                <li>
                    <Paragraph clickable>
                        <Link to="/user/learning">Capitals list</Link>
                    </Paragraph>    
                </li> 
            </ul>
        </nav>
      );
}
 
export default UserNav;