import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import NavBar from './NavBar';
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
          <NavBar mobile={mobile} desktop={desktop} admin={admin} user={user} unnamed={unnamed}
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
    adminLoggedOut: () =>  dispatch(actions.adminLoggedOut()),
    userLoggedOut: () => dispatch(actions.userLoggedOut())
  }) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);