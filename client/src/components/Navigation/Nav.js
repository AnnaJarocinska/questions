import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import Button from '../../styles/Button';
import Container from '../../styles/Container';
import Span from '../../styles/Span';
import Navigation from '../../styles/Navigation';

const Nav = ({home, desktop, logged, admin, user}) => {
    return ( 
        <>
        <Navigation 
        admin={admin ? admin.toString() : undefined}
        user={user ? user.toString() : undefined}>
            <Container icons>
                <Link to="/moreInforations"> 
                    <Span> <Span icon><FontAwesomeIcon icon={faBinoculars}/> </Span>
                    {desktop && "More informations"}
                    </Span>
                </Link>
                {!home && 
                <Link to="/">
                     <Span> <Span icon> <FontAwesomeIcon icon={faCampground}/></Span>
                      {desktop && "Home"}
                      </Span>
                </Link>}
            </Container>
            <Container buttons>
                {!logged?
                <Link to="/login"> <Button login> Login </Button> </Link>:
                <Link to="/"> <Button login> Logout </Button> </Link>}
                <Link to="/newUser"> <Button login> Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link>
            </Container> 
        </Navigation>
        </>
     );
}
 
export default Nav;