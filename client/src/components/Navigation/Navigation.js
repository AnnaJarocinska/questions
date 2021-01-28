import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Nav from './Nav';
import actions from '../../view/duck/actions';

const Navigation = ({ admin, user, unnamed, adminLoggedOut, userLoggedOut}) => {
  
    const mobile = useMediaQuery({
      query: '(max-device-width: 600px)'
    })
    const desktop = useMediaQuery({
      query: '(min-device-width: 1000px)'
    })

    return ( 
        <>
          <Nav mobile={mobile} desktop={desktop} unnamed={unnamed} admin={admin} user={user}
          adminLoggedOut={adminLoggedOut} userLoggedOut={userLoggedOut} />
        </>
     );
}

const mapStateToProps = (state) => ({
    admin: state.view.admin,
    user: state.view.user,
    unnamed: state.view.unnamed, 
})

const mapDispatchToProps = (dispatch) => ({
    adminLoggedIn: () =>  dispatch(actions.adminLoggedIn()),
    adminLoggedOut: () =>  dispatch(actions.adminLoggedOut()),
    userLoggedIn: () => dispatch(actions.userLoggedIn()),
    userLoggedOut: () => dispatch(actions.userLoggedOut())
  }) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);