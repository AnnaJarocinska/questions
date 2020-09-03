import styled from 'styled-components';
import paper from '../images/paper.jpg';

const Wrapper = styled.div`

margin: 0 auto;
background-image: url(${paper});
max-width: 100%;
@media (min-width: 600px) {
    max-width: 1000px;
    min-height: 85vh;
}
`
export default Wrapper;