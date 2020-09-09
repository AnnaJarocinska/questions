import styled from 'styled-components';

const PointsContainer = styled.div`
background-color: ${props => props.theme.colors.grey.dark};
padding: 30px;
margin: 0 auto;
margin-bottom: 0;
color: white;
font-size: 18px;
border-radius: 10px;
display:flex;
justify-content: center;
align-items: center;
@media (min-width: 600px) {
    padding: 10px 30px;
}
@media (min-width: 1000px) {
    width: 200px;
    height: 100px;
    font-size: 20px;
    padding: 15px 30px;
    }
`

export default PointsContainer;