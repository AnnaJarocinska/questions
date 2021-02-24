import styled from 'styled-components';

const CapitalLetterParagraph = styled.p`
font-size: 20px;
text-transform: uppercase;
margin: 15px;
text-align: center;
@media (min-width: 600px) {
    font-size: 16px;
    }
@media (min-width: 1000px) {
    font-size: 20px;
    }
`

export default CapitalLetterParagraph;