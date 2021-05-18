import styled from 'styled-components';

const Footer = styled.footer`
background-color: ${props => props.theme.colors.grey.dark};
border-top:10px solid ${props => props.theme.colors.yellow.dark};
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
padding: 10px;
bottom: 0;
left: 0;
width: 100%;
@media (min-width: 1000px) {
    font-size: 16px; 
}
`
export default Footer