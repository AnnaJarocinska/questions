import styled, { css } from 'styled-components';

const QuestionContainer = styled.div`
background-color: ${props => props.theme.colors.grey.dark};
width: 98%;
min-height: 55%;
margin: 0 auto;
color: white;
border: 10px dotted ${props => props.theme.colors.yellow.dark};
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 600px) {
    min-width:400px;
    min-height: 55%;
    padding: 20px;
    }
@media (min-width: 1000px) {
    width: 600px;
    height: 250px;
    }

${({ max }) => max && css`
    height: 75%;
 `}  
   
${({ admin }) => admin && css`
    border: 10px dotted ${props => props.theme.colors.red.normal};
 `}
`

export default QuestionContainer;