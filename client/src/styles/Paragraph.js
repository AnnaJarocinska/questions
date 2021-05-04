import styled, { css } from 'styled-components';

const Paragraph = styled.p`
padding: 5px;
font-size: 20px;
@media (min-width: 600px) {
    font-size: 16px;
    }
@media (min-width: 1000px) {
    font-size: 20px;
    }
${({ clickable }) => clickable && css`
cursor: pointer;
&:hover{
    filter: brightness(50%);
}`}
${({ center }) => center && css`
text-align: center;
`}
${({ medium }) => medium && css`
font-size: 15px;
`}
${({ small }) => small && css`
font-size: 15px;
@media (min-width: 600px) {
    font-size: 10px;
    }
@media (min-width: 1000px) {
    font-size: 15px;
    }
`}
`

export default Paragraph;