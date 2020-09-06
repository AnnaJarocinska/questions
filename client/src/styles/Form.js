import styled from 'styled-components';

const Form =  styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items-center;
margin: auto;
width: 75%;
height: 85vh;
@media (min-width: 600px) {
    width: 40%;   
    height: 70vh;
}

`   

export default Form;