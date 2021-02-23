import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ component, access, admin, user}) => {
        const Component = component;
        const isApplying = Cookies.get('apply');
        const isAuthenticated = access === "admin" ? admin : user;
        const isAuth = (isApplying && isAuthenticated)? true: false;
         return (
            <>
            { isAuth ? (
            <Component />
        ) : (
           <Redirect to='/login'/>
         )} 
        </>
        )
    }

const mapStateToProps = (state) => ({
    admin: state.view.admin,
    user: state.view.user,
    unnamed: state.view.unnamed
})
 
export default connect(mapStateToProps, null)(ProtectedRoute);