import styled from 'styled-components';

const PointsContainer = styled.div`
background-color: ${props => props.theme.colors.grey.dark};
width: 200px;
height: 100px;
margin: auto;
color: white;
font-size: 20px;
border-radius: 10px;
display:flex;
justify-content: center;
align-items: center;
`

export default PointsContainer;