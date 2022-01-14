
import React from 'react';
import { Container } from './styles';

import { MdStayCurrentLandscape } from 'react-icons/md'


function VergePreloader() {



  return (
    <Container>
      <div style={{ padding: 20 }}>
        Pon tu celular en posicion horizontal para poder acceder a la experiencia
      </div>
      <MdStayCurrentLandscape />
    </Container>
  );
}

export default VergePreloader;