import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

const Navbar = (props) => {

    const home = props.home

    const isNotMobile = useMediaQuery({
        query: '(min-device-width: 600px)'
      })
      const isDesktop = useMediaQuery({
        query: '(min-device-width: 1000px)'
      })

    return (
        <>
        {isNotMobile ? <Nav home={home} desktop={isDesktop}/> : <NavMobile home={home}/> }    
        </>
     );
}
 
export default Navbar;