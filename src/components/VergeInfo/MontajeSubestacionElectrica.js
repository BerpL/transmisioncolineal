import React, { useState } from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

import { Container, Icon, Content, Title, Wrapper, SubTitle } from './styles';

const MontajeSubestacionElectrica = () => {
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
          <Title>Sobre la experiencia Montaje Sub Estación Eléctrica</Title>
          <Content>
            <p>Durante las diferentes etapas de la experiencia podrás:
            </p>
            <ul style={{ listStyleType: "circle" }}>
              <li> Montar una estación eléctrica.</li>
              <li> Delimitar zona de riesgo.</li>
              <li> Colocar elementos de seguridad y riesgo eléctrico.</li>
              <li> Colocar tablero de control.</li>
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


            <SubTitle>Montaje Sub Estación Eléctrica</SubTitle>

            <div>
              <img src="/recursos/subestacion_electrica/imagenes/proc1.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                  <ul>
                    <li>Se limitará con elementos de seguridad la zona de riesgo.</li>
                    <li>Se procederá con cuidado a verificar la ausencia de tensión en la zona de trabajo</li>
                    <li>Colocación de las crucetas.</li>
                    <li>Subida del transformador.</li>
                    <li>Colocación y conexión de los pararrayos.</li>
                    <li>Colocación y conexión de los Seccionadores.</li>
                    <li>Colocación del tablero.</li>
                    <li>Colocación de los fusibles.</li>
                    <li>Colocación de los stoppings.</li>
                  </ul>
                </span>
              </p>
            </div>
            <br />
            <br />
          
            <br />
            <br />
            <p>El <strong>panel derecho</strong> muestra imagenes para la mejor comprensión del paso a paso del procedimiento Seleccionado</p>
            <div>
              <img src="/recursos/subestacion_electrica/imagenes/panelDerecha.png" alt="desmontaje" width="150px" />
              <p>
                <span>
                  Haga clic en las parte superior derecha para poder ocultar o motrar el panel de imagenes
                </span>
                <span>
                  Haga clic en las flechas izquierda y derecha para recorrer entre las imagenes
                </span>
              </p>
            </div>
          </Content>
        </Wrapper>
      </Container >
    </>);
}

export default MontajeSubestacionElectrica;