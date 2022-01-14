
import React from 'react';
import { Container, Icon } from './styles';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'



function VergePreloader() {



  return (
    <Container id="preloader_screen" >
      <div>
        <Icon>
          <AiOutlineLoading3Quarters />
        </Icon>
        <br />
        <div id="loading_percentage">0%</div>
      </div>


    </Container>
  );
}

export default VergePreloader;