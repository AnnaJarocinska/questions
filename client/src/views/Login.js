import React from 'react';
import LoginForm from '../components/LoginForm';
import Wrapper from '../styles/Wrapper';
import Overlay from '../styles/Overlay';
import NavBar from '../components/NavBar';

const Login = () => {
    return ( 
        <>
        <NavBar/>
        <Wrapper>
            <Overlay>
                <LoginForm/>
            </Overlay>
        </Wrapper>
        </>
     );
}
 
export default Login;