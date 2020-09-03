import styled from 'styled-components';

const Title = styled.h1`
text-transform: uppercase;
font-family: 'Fredericka the Great', cursive;
text-align: center;
font-size: 40px;
position: absolute;
top: 25%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
@media (min-width: 600px) {
    font-size: 50px; 
    top: 50%;  
}
`

export default Title;