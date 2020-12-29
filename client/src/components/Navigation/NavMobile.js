import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import Span from '../../styles/Span';
import NavigationMobile from '../../styles/NavigationMobile';
import Button from '../../styles/Button';
import Navigation from '../../styles/Navigation';

const NavMobile = () => { 
   
    const [expand, setExpand] = useState(false)

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
                <Link to="/moreInforations"> <Span> <FontAwesomeIcon icon={faBinoculars}/> </Span> <Span> More informations </Span>  </Link>
                <Link to="/login"> <Button login menu> Login </Button> </Link>
                <Link to="/newUser"> <Button login menu > Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow menu> Quick game </Button> </Link>
            </NavigationMobile>
            }
        </>
     );
}
 
export default NavMobile;
