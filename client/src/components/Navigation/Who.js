import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Span from '../../styles/Span';
import { getUserName } from '../../loggedIn/duck/operations';
import actions from '../../loggedIn/duck/actions';



const Who = ({admin, user, unnamed, userName}) => {

    // useEffect(() => {   
        // getUserName()
        // const cookieKey = Cookies.get('key');
        // const keyyContent = {
        //   key: cookieKey,
        // }

        //  axios.post('/users', keyyContent)
        // .then(res => {
        //  console.log(res.data.name, 'res.data w who.js', typeof res.data) 
        //  addUserName('jj') 
         
        // })
        // .catch(err => console.log(err, 'err who'))
    // }

    // )
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
    userName: state.loggedIn.userName,
    
})

const mapDispatchToProps = (dispatch) => ({
    getUserName: () =>  dispatch(getUserName()),
    addUserName: () =>  dispatch(actions.addUserName()),
  }) 
 
export default connect(mapStateToProps, mapDispatchToProps)(Who);