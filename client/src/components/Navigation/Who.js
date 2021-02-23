import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Span from '../../styles/Span';
import { getUserName } from '../../loggedIn/duck/operations';
import actions from '../../loggedIn/duck/actions';

const Who = ({admin, user, unnamed, userName}) => {
    const icon = (
    !unnamed ? 
    <Span admin={admin ? admin.toString() : undefined} user={user ? user.toString() : undefined}>
        <FontAwesomeIcon icon={faUser}/> {userName}  </Span> : null
        )
    return ( 
        <div>
            {icon}
        </div>
     );
}
 
const mapStateToProps = (state) => ({
    userName: state.loggedIn.userName
})

const mapDispatchToProps = (dispatch) => ({
    getUserName: () =>  dispatch(getUserName()),
    addUserName: () =>  dispatch(actions.addUserName())
  }) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Who);