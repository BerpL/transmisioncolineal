import React, { useState } from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

import { Container, Icon, Content, Title, Wrapper, SubTitle } from './styles';

const Alineamiento = () => {
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
          <Title>Sobre la experiencia Cambio de Rodamientos</Title>
          <Content>
            <p>Durante las diferentes etapas de la experiencia podrás:
            </p>
            <ul style={{ listStyleType: "circle" }}>
              <li> Montar y desmontar un motor.</li>
              <li> Extraer el Rodamiento del eje del motor.</li>
              <li> Dilatar el nuevo rodamiento a colocar en el eje del motor.</li>
              <li> Encajar y posicionar, en base a presión, al rodamiento en el eje del motor.</li>
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


            <SubTitle>Desmontaje del motor</SubTitle>

            <div>
              <img src="/recursos/cambio-rodamientos/imagenes/p1.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                  <ul>
                    <li>Se retirarán los pernos que sujetan la tapa del motor.</li>
                    <li>Se procederá con cuidado al retiro de la tapa.</li>
                  </ul>
                </span>
              </p>
            </div>
            <br />
            <br />
            <SubTitle>Cambio de rodamiento</SubTitle>

            <div>
              <img src="/recursos/cambio-rodamientos/imagenes/p2.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                  <ul>
                    <li>Se colocará la herramienta con forma de garra sujetando por detrás con las pinzas.</li>
                    <li>Se ajustará con ambos lados de la herramienta, girando hacia el lado izquierdo, hasta que el rodamiento salga del eje del motor.</li>
                    <li>Buscamos en el kit de herramientas el accesorio correspondiente en diámetro según el rodamiento extraído previamente.</li>
                    <li>Se colocará el rodamiento en la máquina que dilatará el rodamiento, y configuraremos este a 110 °C.</li>
                    <li>Colocamos el rodamiento rápidamente en el eje del motor.</li>
                    <li>Pondremos el accesorio, elegido previamente, sobre el rodamiento y encima la manga para poder golpear este último con el mazo.</li>
                  </ul>
                </span>
              </p>
            </div>
            <br />
            <br />
            <SubTitle>Montaje del motor</SubTitle>

            <div>
              <img src="/recursos/cambio-rodamientos/imagenes/p3.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                  <ul>
                    <li>Colocar el eje del motor con el rodamiento ya colocado dentro de la caja del motor.</li>
                    <li>Colocaremos la tapa del motor según las marcas de los huecos por donde pasarán los pernos posteriormente.</li>
                    <li>Agarrando la tapa, introduciremos un perno a la vez sin ajustar del todo.</li>
                    <li>Cuando los cuatro pernos estén colocados y semi ajustados, ajustamos completamente estos.</li>
                  </ul>
                </span>

              </p>
            </div>
            <br />
            <br />
            <p>El <strong>panel derecho</strong> muestra imagenes para la mejor comprensión del paso a paso del procedimiento Seleccionado</p>
            <div>
              <img src="/recursos/cambio-rodamientos/imagenes/panelDerecho.png" alt="desmontaje" width="150px" />
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

export default Alineamiento;