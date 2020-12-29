import React from 'react';
import { connect } from 'react-redux';
// import { matchPath } from "react-router";
import { useMediaQuery } from 'react-responsive';

import Nav from './Nav';
import NavMobile from './NavMobile';
import actions from '../../view/duck/actions';

const Navigation = ({props, match, admin, user, unnamed, home}) => {
    // let trr = match.path
  console.log(match, 'match.path in navigation')

  

  const isNotMobile = useMediaQuery({
    query: '(min-device-width: 600px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  })

    return ( 
        // <NavBar
        // admin= {admin}
        // user= {user}
        // unnamed= {unnamed}
        // home= {home}/>
        <>
        {isNotMobile ? 
        <Nav home={home} unnamed={unnamed} admin={admin} user={user} desktop={isDesktop}/> :
        <NavMobile home={home} unnamed={unnamed}/> }    
        </>
     );
}

const mapStateToProps = (state) => ({
    admin: state.view.admin,
    user: state.view.user,
    unnamed: state.view.unnamed, 
    home: state.view.home
})

const mapDispatchToProps = (dispatch) => ({
    adminLoggedIn: () =>  dispatch(actions.adminLoggedIn()),
    adminLoggedOut: () =>  dispatch(actions.adminLoggedOut()),
    userLoggedIn: () => dispatch(actions.userLoggedIn()),
    userLoggedOut: () => dispatch(actions.userLoggedOut()),
    isHomepage: () => dispatch(actions.isHomepage())
  }) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);