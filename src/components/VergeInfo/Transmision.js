import React, { useState } from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

import { Container, Icon, Content, Title, Wrapper, 
  // SubTitle 
} from './styles';

const Transmision = () => {
  const [open, setIsOpen] = useState(false)
  return (
    <>
      <Icon onClick={() => setIsOpen(!open)}>
        <FaInfoCircle />
      </Icon>
      <Container open={open}>
        <Wrapper>
          <Icon onClick={() => setIsOpen(!open)}>
            <FaTimes />
          </Icon>
          <Title>Sobre la experiencia "Desmontaje de Transmisión"</Title>
          <Content>
            <p>Durante las diferentes etapas de la experiencia podrás:
            </p>
            <ul style={{ listStyleType: "circle" }}>
              <li> Delimitar zona de riesgo.</li>
              <li> Colocar elementos de seguridad y riesgo eléctrico.</li>
            </ul>
            <p>Además de realizar una experiencia a un nivel interactivo, visual y auditivo dentro de las diferentes etapas del procedimiento..</p>
            <ul>
              <li>1. Mozilla Firefox +31</li>
              <li>2. Google Chrome +34</li>
              <li>3. Apple Safari +8</li>
            </ul>
            <p>Otros navegadores pueden funcionar, pero se sugiere Chrome o Firefox para una mejor experiencia.</p>

            <Title>Cómo usar</Title>

            <p>Haga clic y arrastre en el fondo para rotar la vista de la cámara. Usa la rueda del mouse para acercar y alejar.</p>
            <p>Desde el <strong>panel izquierdo</strong>, puede elegir su vista y explorar las características</p>


          </Content>
        </Wrapper>
      </Container >
    </>);
}

export default Transmision;