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
`

export default Paragraph;