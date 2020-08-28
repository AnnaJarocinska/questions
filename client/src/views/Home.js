import React from 'react';
import Wrapper from '../styles/Wrapper';
import Image from '../styles/Image';
import Title from '../styles/Title.js';
import Overlay from '../styles/Overlay.js';

const Home = () => {
    return (
      
        <Wrapper>
          <Overlay>
          <Title>The capitals quiz</Title>
          <Image/>
          </Overlay>
        </Wrapper>
        
      );
}
 
export default Home;