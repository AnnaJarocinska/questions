import styled from 'styled-components';
import MapOfTheWorld from '../images/MapOfTheWorldColorful.png'

const Image = styled.img.attrs({
    src: MapOfTheWorld
})`
max-width: 100%;
height: auto;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 600px) {
    top: 50%;
  }
`

export default Image;