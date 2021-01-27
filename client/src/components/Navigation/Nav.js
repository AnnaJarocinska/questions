import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import Button from '../../styles/Button';
import Container from '../../styles/Container';
import Span from '../../styles/Span';
import Navigation from '../../styles/Navigation';

const Nav = ({home, desktop, unnamed, admin, user, adminLoggedOut, userLoggedOut}) => {
    const logOut = admin ? adminLoggedOut : userLoggedOut;
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
                {(admin || user) && 
                <Link to="/admin">
                     <Span> <Span icon> <FontAwesomeIcon icon={faMap}/></Span>
                      {desktop && "Dashboard"}
                      </Span>
                </Link>}
            </Container>
            <Container buttons>
                {unnamed?
                <Link to="/login"> <Button login> Login </Button> </Link>:
                <Link to="/login"> <Button login 
                    onClick={ () => {logOut(); Cookies.remove('key');  Cookies.remove('apply')}}>
                    Logout </Button></Link>}
                <Link to="/newUser"> <Button login> Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link>
            </Container> 
        </Navigation>
        </>
     );
}
 
export default Nav;