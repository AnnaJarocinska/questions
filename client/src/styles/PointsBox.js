import styled from 'styled-components';

const PointsBox = styled.div`
background-color: ${props => props.theme.colors.white.normal};
width: 20px;
height: 20px;
color: black;
margin-left: 8px;
display:flex;
justify-content: center;
align-items: center;
`

export default PointsBox;