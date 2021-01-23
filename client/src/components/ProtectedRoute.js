import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({component, access, admin, user}) => {
        const Component = component;
        const isAuthenticated = access === "admin" ? admin : user;
        return (
            <>
            {isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        )}
        </>
        )
    }

const mapStateToProps = (state) => ({
    admin: state.view.admin,
    user: state.view.user,
    unnamed: state.view.unnamed, 
    home: state.view.home
})
 
export default connect(mapStateToProps, null)(ProtectedRoute);