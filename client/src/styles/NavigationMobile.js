import styled from 'styled-components';

const NavigationMobile = styled.div`

background-color: ${props => props.theme.colors.grey.dark};
display: flex;
flex-direction: column;
padding: 10px; 
height: 30vh;
justify-content: space-around;
max-width: 100%;
`
export default NavigationMobile;