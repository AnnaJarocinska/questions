import styled from 'styled-components';

const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${props => props.theme.colors.grey.dark};
padding: 10px;
border-bottom:15px solid ${props => props.theme.colors.yellow.dark};
max-width: 100%;
`
export default Navigation;