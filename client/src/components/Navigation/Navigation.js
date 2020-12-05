import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar';
import actions from '../../view/duck/actions';

const Navigation = ({admin, user, unnamed, home}) => {
    return ( 
        <NavBar
        admin= {admin}
        user= {user}
        unnamed= {unnamed}
        home= {home}/>
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