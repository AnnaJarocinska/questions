import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import Button from '../../styles/Button';
import Container from '../../styles/Container';
import Span from '../../styles/Span';
import Navigation from '../../styles/Navigation';
import Who from './Who';

const NavBar = ({mobile, desktop, admin, user, unnamed, adminLoggedOut, userLoggedOut}) => {

    const [expand, setExpand] = useState(false);
    const logOut = admin ? adminLoggedOut : userLoggedOut;
    const toggleMenu = () => {
        setExpand(!expand)
    }
    const isExpanded = mobile? expand : true;
    return ( 
        <>
            {mobile ?
            <Navigation
                admin={admin ? admin.toString() : undefined}
                user={user ? user.toString() : undefined}>
                    <Span> <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/> </Span>
            </Navigation> :
            null}
            {isExpanded &&
            <Navigation
                mobile={mobile ? mobile.toString() : undefined}
                admin={admin ? admin.toString() : undefined}
                user={user ? user.toString() : undefined}>
                    <Container icons mobile={mobile ? mobile.toString() : undefined}>
                        <Link to="/moreInformation" onClick={toggleMenu}> 
                            <Span> <Span icon><FontAwesomeIcon icon={faBinoculars}/> </Span>
                            {(desktop || mobile) && "More information"}</Span>
                        </Link>
                        <Link to="/" onClick={toggleMenu}>
                            <Span> <Span icon> <FontAwesomeIcon icon={faCampground}/> </Span>
                            {(desktop || mobile) && "Home"}</Span>
                        </Link>
                        {admin && 
                        <Link to="/admin" onClick={toggleMenu}>
                            <Span> <Span icon> <FontAwesomeIcon icon={faMap}/> </Span>
                            {(desktop || mobile) && "Dashboard"}</Span>
                        </Link>}
                        {user && 
                        <Link to="/user" onClick={toggleMenu}>
                            <Span> <Span icon> <FontAwesomeIcon icon={faMap}/> </Span>
                            {(desktop || mobile) && "Dashboard"}</Span>
                        </Link>}  
                    </Container>
                    <Container buttons mobile={mobile ? mobile.toString() : undefined}>
                    <Who unnamed={unnamed} admin={admin} user={user}/>
                        {unnamed?
                        <Link to="/login" onClick={toggleMenu}> <Button login> Login </Button> </Link> :
                        <Link to="/login" onClick={toggleMenu}> <Button login onClick={() => {logOut(); Cookies.remove('key'); Cookies.remove('apply')}}>
                            Logout </Button></Link>}
                        {!admin && !user ? <Link to="/newUser" onClick={toggleMenu}> <Button login> Register </Button> </Link> : null}
                        {!admin && !user ? <Link to="/quiz" onClick={toggleMenu}> <Button login yellow> Quick game </Button> </Link> : null}
                    </Container>
            </Navigation>
            }
        </>
     );
}
 
export default NavBar;