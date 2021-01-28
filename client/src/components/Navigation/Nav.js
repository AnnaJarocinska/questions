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

const Nav = ({mobile, desktop, unnamed, admin, user, adminLoggedOut, userLoggedOut}) => {

    const [expand, setExpand] = useState(false)
    const logOut = admin ? adminLoggedOut : userLoggedOut;
    const toggleMenu = () => {
        setExpand(!expand)
    }
    const icons = 
        <>
            <Link to="/moreInforations"> 
                <Span> <Span icon><FontAwesomeIcon icon={faBinoculars}/> </Span>
                {desktop && "More informations"}</Span>
            </Link>
            
            <Link to="/">
                <Span> <Span icon> <FontAwesomeIcon icon={faCampground}/> </Span>
                {desktop && "Home"}</Span>
            </Link>

            {admin && 
            <Link to="/admin">
                <Span> <Span icon> <FontAwesomeIcon icon={faMap}/> </Span>
                {desktop && "Dashboard"}</Span>
            </Link>}

            {user && 
            <Link to="/user">
                <Span> <Span icon> <FontAwesomeIcon icon={faMap}/> </Span>
                {desktop && "Dashboard"}</Span>
            </Link>}
        </>

const buttons = 
    <>
        {unnamed?
        <Link to="/login"> <Button login> Login </Button> </Link> :
        <Link to="/login"> <Button login onClick={() => {logOut(); Cookies.remove('key'); Cookies.remove('apply')}}>
            Logout </Button></Link>}
        {!admin && !user ? <Link to="/newUser"> <Button login> Register </Button> </Link> : null}
        {!admin && !user ? <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link> : null}
    </>
    const isExpanded = mobile? expand : true;
    return ( 
        <>
        {mobile ?
        <Navigation> 
                <Span> <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/> </Span>
        </Navigation> :
         null}
       {isExpanded &&
       <Navigation
        mobile={mobile ? mobile.toString() : undefined}
        admin={admin ? admin.toString() : undefined}
        user={user ? user.toString() : undefined}>
            {!mobile?
            <>
            <Container icons> {icons} </Container>
            <Container buttons> {buttons} </Container></> :
           <> {icons} {buttons} </>}
        </Navigation>
        }
        </>
     );
}
 
export default Nav;