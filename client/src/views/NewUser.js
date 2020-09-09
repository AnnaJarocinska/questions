import React from 'react';
import NewUserForm from '../components/NewUserForm';
import Wrapper from '../styles/Wrapper';
import Overlay from '../styles/Overlay';
import NavBar from '../components/NavBar';

const NewUser = () => {
    return ( 
        <>
        <NavBar/>
        <Wrapper>
            <Overlay>
                <NewUserForm/>
            </Overlay>
        </Wrapper>
        </>
     );
}
 
export default NewUser;