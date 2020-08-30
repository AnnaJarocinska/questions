import styled from 'styled-components';

const Overlay = styled.div`
background-color: ${props => props.theme.colors.white.transparent};
min-height: 85vh;
position: relative;
`

export default Overlay;