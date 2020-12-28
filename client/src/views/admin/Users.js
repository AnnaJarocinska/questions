import React from 'react';
import User from '../../components/User';
import Wrapper from '../../styles/Wrapper';
import Overlay from '../../styles/Overlay';

const Users = () => {
    return ( 
        <>
        <Wrapper>
            <Overlay>
                    <User/> 
            </Overlay>    
        </Wrapper>
        </>
     );
}
 
export default Users;