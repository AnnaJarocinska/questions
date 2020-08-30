import React from 'react';
import Wrapper from '../styles/Wrapper';
import Image from '../styles/Image';
import Title from '../styles/Title.js';
import Overlay from '../styles/Overlay.js';

const MainImage = () => {
    return (
      
        <Wrapper>
          <Overlay>
          <Title>Capitals of the World</Title>
          <Image/>
          </Overlay>
        </Wrapper>
        
      );
}
 
export default  MainImage;