import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../styles/Navigation';
import Nav from '../components/Nav';

const Navbar = (props) => {

    const home = props.home

    const isNotMobile = useMediaQuery({
        query: '(min-device-width: 600px)'
      })

    return (
    <>
    

         {isNotMobile ? <Navigation ><Nav home={home}/></Navigation>
        : <Navigation mobile> <Nav home={home}/> </Navigation>}       
        
         </>
     );
}
 
export default Navbar;