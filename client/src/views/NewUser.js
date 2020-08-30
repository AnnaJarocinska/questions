import React from 'react';
import NewUserForm from '../components/NewUserForm';
import Wrapper from '../styles/Wrapper';
import Overlay from '../styles/Overlay';

const NewUser = () => {
    return ( 
        <>
        <Wrapper>
            <Overlay>
        <NewUserForm/>
        </Overlay>
        </Wrapper>
        </>
     );
}
 
export default NewUser;