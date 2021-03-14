import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

${({ separate }) => separate && css`
background-color: ${props => props.theme.colors.grey.dark};
min-width: 400px;
min-height: 55%;
margin: 0 auto;
color: white;
border: 10px dotted ${props => props.theme.colors.yellow.dark};
flex-direction: column;
justify-content: center;
@media (min-width: 600px) {
    width: ${props => props.half? '50%' : '100%'};
    padding: 20px;
    }
@media (min-width: 1000px) {
    width: 600px;
    min-height: 30%;
    }
    ${({ max }) => max && css`
    height: 75%;
    `}  
   
    ${({ admin }) => admin && css`
    border: 10px dotted ${props => props.theme.colors.red.normal};
    `}  

    ${({ user }) => user && css`
    border: 10px dotted ${props => props.theme.colors.green.normal};
 `}
`}

${({ half }) => half && css`
justify-content: space-around;
`}

${({ left }) => left && css`
align-items: stretch;
`}

${({ points }) => points && css`
background-color: ${props => props.theme.colors.grey.dark};
padding: 30px;
margin: 0 auto;
margin-bottom: 0;
color: white;
font-size: 18px;
border-radius: 10px;
justify-content: center;
@media (min-width: 600px) {
    padding: 10px 30px;
}
@media (min-width: 1000px) {
    width: 200px;
    height: 100px;
    font-size: 20px;
    padding: 15px 30px;
    }
`}

${({ list }) => list && css`
border-bottom: 2px solid ${props => props.theme.colors.grey.dark};
padding: 10px 20px;
text-align: center;
flex-direction: column;
`}

${({ icons }) => icons && css`
white-space: nowrap;
@media (min-width: 600px) {
    max-width: 20%;
}
@media (min-width: 1000px) {
    max-width: 25%;
}
`}

${({ buttons }) => buttons && css`
margin-right: 10px;
@media (min-width: 600px) {
    max-width: 52%;
}
@media (min-width: 1000px) {
    max-width: 40%;
}
`}
${({ main }) => main && css`
flex-direction: column;
justify-content: space-around;
`}

${({ form }) => form && css`
padding: 100px;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
`}

${({ mobile }) => mobile && css`
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
flex-basis: 15vh;
`}
`
export default Container;
