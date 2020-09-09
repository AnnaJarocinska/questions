import React from 'react';
import User from '../../components/User';
import NavBar from '../../components/NavBar';
import Wrapper from '../../styles/Wrapper';
import Overlay from '../../styles/Overlay';

const Users = () => {
    return ( 
        <>
        <NavBar admin logged/>
        <Wrapper>
            <Overlay>
                    <User/> 
            </Overlay>    
        </Wrapper>
        </>
     );
}
 
export default Users;