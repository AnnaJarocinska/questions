import React from 'react';
import LoginForm from '../components/LoginForm';
import Wrapper from '../styles/Wrapper';
import Overlay from '../styles/Overlay';

const Login = () => {
    return ( 
        <>
        <Wrapper>
            <Overlay>
                <LoginForm/>
            </Overlay>
        </Wrapper>
        </>
     );
}
 
export default Login;