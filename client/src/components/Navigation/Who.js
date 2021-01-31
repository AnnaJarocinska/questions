import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Span from '../../styles/Span';
import { getUserName } from '../../loggedIn/duck/operations';
import actions from '../../loggedIn/duck/actions';

const Who = ({admin, user, unnamed, userName}) => {
    const handleClick = async () => { getUserName()
        console.log(userName, 'username')
    
       
        const cookieKey = Cookies.get('key');
        const keyyContent = {
          key: cookieKey,
        }

        await axios.post('/users', keyyContent)
        .then(res => {
         console.log(res.data, 'res.data w who.js') 
         
        })
        .catch(err => console.log(err, 'err who'))


    }
 
    const who = admin ? "admin" : "user";
    const icon = (
    !unnamed ? 
    <Span admin={admin ? admin.toString() : undefined} user={user ? user.toString() : undefined}>
        <FontAwesomeIcon icon={faUser}/> {who} </Span> : null
        )
    return ( 
        <div>
            {icon}
            <button onClick={handleClick}>tuu</button>
            <p>{userName}</p>
        </div>
     );
}
 
const mapStateToProps = (state) => ({
    userName: state.loggedIn.userName,
    
})

const mapDispatchToProps = (dispatch) => ({
    getUserName: () =>  dispatch(actions.getUserName()),
  }) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Who);