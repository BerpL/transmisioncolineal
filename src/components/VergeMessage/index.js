import React, { useEffect, useState } from 'react';

import { Container, Title } from './styles';
import { FaInfoCircle, FaExpand } from 'react-icons/fa';

function VergeMessage() {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout = null;

    timeout = setTimeout(() => {
      setVisible(false)
    }, 5000);

    return () => clearTimeout(timeout);
  }, [])



  return (
    <Container style={{ display: visible ? 'block' : 'none' }}>
      <Title>Bienvenido a la experiencia</Title>
      <p>
        Selecciona el botón <FaInfoCircle /> en la parte superior derecha para comenzar
      </p>
      <p>
        La experiencia se ve mejor en pantalla completa. Selecciona el boton <FaExpand /> para cambiar
      </p>
    </Container>
  );
}

export default VergeMessage;