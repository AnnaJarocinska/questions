import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import Span from '../../styles/Span';
import NavigationMobile from '../../styles/NavigationMobile';
import Button from '../../styles/Button';
import Navigation from '../../styles/Navigation';

const NavMobile = ({admin, user, unnamed, desktop, adminLoggedOut, userLoggedOut}) => { 
   
    const [expand, setExpand] = useState(false)
    const logOut = admin ? adminLoggedOut : userLoggedOut;
    const toggleMenu = () => {
        setExpand(!expand)
    }
   
    return ( 
        <>
            <Navigation mobile> 
                <Span> <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/> </Span>
            </Navigation>    
            {expand && 
            <NavigationMobile>
                <Link to="/"> <Span> <FontAwesomeIcon icon={faCampground} /> Home </Span> </Link>
                <Link to="/moreInforations"> <Span> <FontAwesomeIcon icon={faBinoculars}/> </Span> <Span> More informations </Span></Link>
                {admin && 
                <Link to="/admin">
                     <Span> <Span icon> <FontAwesomeIcon icon={faMap}/></Span>
                      {desktop && "Dashboard"}
                      </Span>
                </Link>}
                {user && 
                <Link to="/user">
                     <Span> <Span icon> <FontAwesomeIcon icon={faMap}/></Span>
                      {desktop && "Dashboard"}
                      </Span>
                </Link>}
                {unnamed?
                <Link to="/login"> <Button login> Login </Button> </Link>:
                <Link to="/login"> <Button login 
                    onClick={ () => {logOut(); Cookies.remove('key');  Cookies.remove('apply')}}>
                    Logout </Button></Link>}
                {!admin && !user ? <Link to="/newUser"> <Button login menu > Register </Button> </Link> : null}
                {!admin && !user ? <Link to="/quiz"> <Button login yellow menu> Quick game </Button> </Link> : null}
            </NavigationMobile>
            }
        </>
     );
}
 
export default NavMobile;
