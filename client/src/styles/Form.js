import styled, { css } from 'styled-components';

const Form =  styled.form`
display: flex;
flex-direction: column;
justify-content: center;
@media (min-width: 650px) {
    width: 40%;   
    min-height: 75vh;
}

${({ login }) => login && css`
width: 75%;
height: 80vh;
@media (min-width: 600px) {
    width: 40%;   
    height: 75vh;
}
`}
`   

export default Form;

