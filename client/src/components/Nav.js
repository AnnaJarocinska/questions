import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import Button from '../styles/Button';
import Container from '../styles/Container';
import Span from '../styles/Span';
import Navigation from '../styles/Navigation';

const Nav = ({home, desktop}) => {
    return ( 
        <>
        <Navigation>
            <Container icons>
                <Link to="/moreInforations"> 
                    <Span> <FontAwesomeIcon icon={faBinoculars}/> </Span>
                    {desktop &&
                    <Span> More informations </Span>}
                </Link>
                {!home && 
                <Link to="/"> <Span> <FontAwesomeIcon icon={faCampground} /> {desktop && "Home"} </Span> </Link>}
            </Container>
            <Container buttons>
                <Link to="/login"> <Button login> Login </Button> </Link>
                <Link to="/newUser"> <Button login> Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link>
            </Container> 
        </Navigation>
        </>
     );
}
 
export default Nav;