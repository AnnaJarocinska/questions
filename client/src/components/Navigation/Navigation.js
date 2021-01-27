import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Nav from './Nav';
import NavMobile from './NavMobile';
import actions from '../../view/duck/actions';

const Navigation = ({ admin, user, unnamed, home, adminLoggedOut, userLoggedOut}) => {
    const isNotMobile = useMediaQuery({
      query: '(min-device-width: 600px)'
    })
    const isDesktop = useMediaQuery({
      query: '(min-device-width: 1000px)'
    })

    return ( 
        <>
        {isNotMobile ? 
        <Nav home={home} unnamed={unnamed} admin={admin} user={user} desktop={isDesktop} 
        adminLoggedOut={adminLoggedOut} userLoggedOut={userLoggedOut} /> :
        <NavMobile home={home} unnamed={unnamed} admin={admin} user={user} desktop={isDesktop}
        adminLoggedOut={adminLoggedOut} userLoggedOut={userLoggedOut}/> }    
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