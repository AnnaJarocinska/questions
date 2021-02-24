import styled from 'styled-components';

const Paragraph = styled.p`
font-size: 20px;
cursor: pointer;
&:hover{
    filter: brightness(50%);
}
@media (min-width: 600px) {
    font-size: 16px;
    }
@media (min-width: 1000px) {
    font-size: 20px;
    }
`

export default Paragraph;