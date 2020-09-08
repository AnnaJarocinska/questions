import styled from 'styled-components';

const QuestionContainer = styled.div`
background-color: ${props => props.theme.colors.grey.dark};
width: 600px;
height: 250px;
margin: auto;
color: white;
border: 10px dotted ${props => props.theme.colors.yellow.dark};
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default QuestionContainer;