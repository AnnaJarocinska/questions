import styled from 'styled-components';
import paper from '../images/paper.jpg';

const Wrapper = styled.div`
max-width: 1000px;
display: flex;
justify-content: center;
margin: 0 auto;
background-image: url(${paper});
background-repeat: no-repeat;
`
export default Wrapper;