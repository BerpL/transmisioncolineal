import React, { useState } from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

import { Container, Icon, Content, Title, Wrapper, SubTitle } from './styles';

function Compresor() {
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
          <Title>Sobre la experiencia Compresor</Title>
          <Content>
            <p>Durante las diferentes etapas de la experiencia podrás:
            </p>
            <ul style={{ listStyleType: "circle" }}>
              <li> Montar y desmontar paso a paso</li>
              <li> Obtener información de cada pieza</li>
              <li> Manipular algunas de las piezas</li>
              <li> Manipular herramientas con diferentes números de cabezal para realizar diferentes acciones como ajustar o desajustar piezas</li>
              <li> Visualizar imágenes para observar cómo se realiza alguna etapa específica</li>
              <li> Recibir instrucciones de como realizar la experiencia a nivel que avances en los diferentes niveles</li>
            </ul>
            <p>Además de realizar una experiencia a un nivel interactivo, visual y auditivo dentro de las diferentes etapas de montaje y desmontaje..</p>
            <ul>
              <li>1. Mozilla Firefox +31</li>
              <li>2. Google Chrome +34</li>
              <li>3. Apple Safari +8</li>
            </ul>
            <p>Otros navegadores pueden funcionar, pero se sugiere Chrome o Firefox para una mejor experiencia.</p>

            <Title>Cómo usar</Title>

            <p>Haga clic y arrastre en el fondo para rotar la vista de la cámara. Usa la rueda del mouse para acercar y alejar.</p>
            <p>Desde el <strong>panel izquierdo</strong>, puede elegir su vista y explorar las características</p>

            <SubTitle>Piezas</SubTitle>
            <div>
              <img src="/recursos/compresor/imagenes/piezas.png" alt="piezas" width="200px" />
              <p>
                <span>
                  Desplázate por la mesa y pasa el cursor por encima de una etiqueta para identificar el nombre de la pieza
                </span>

              </p>
            </div>
            <br />
            <br />

            <SubTitle>Montaje</SubTitle>

            <div>
              <img src="/recursos/compresor/imagenes/montaje.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                  En esta sección tendrás la información de cómo realizar el montaje por secciones donde se encuentra un instructivo de audio, el cual se reproducirá en cada etapa del proceso mientras avances en las diferentes etapas de la experiencia.
              </span>
                <span>
                  Además, podrás manipular los objetos y las piezas para poder realizar la experiencia a un nivel interactivo, visual y auditivo. Desde ajustar o desajustar piezas con una herramienta, seleccionar piezas para observar imágenes de la pieza, revisar cómo es la etapa de armado para la pieza en un entorno real y escuchar indicaciones de como realizarlo con un equipo real.
              </span>
              </p>
            </div>
            <br />
            <br />
            <SubTitle>Desmontaje</SubTitle>

            <div>
              <img src="/recursos/compresor/imagenes/Desmontaje.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                  En esta sección tendrás la información de cómo realizar el desmontaje por secciones donde se encuentra un instructivo de audio, el cual se reproducirá en cada etapa del proceso mientras avances en las diferentes etapas de la experiencia.

                </span>
                <span>
                  Además, podrás manipular los objetos y las piezas para poder realizar la experiencia a un nivel interactivo, visual y auditivo. Desde ajustar o desajustar piezas con una herramienta, seleccionar piezas para observar imágenes de la pieza o revisar cómo es la etapa de armado para la pieza en un entorno real y escuchar indicaciones de como realizarlo con un equipo real.

                </span>
              </p>
            </div>
            <br />
            <br />
            <SubTitle>Avanzar en procedimientos</SubTitle>
            <div>
              <img src="/recursos/compresor/imagenes/next.png" alt="desmontaje" width="50px" />
              <p>
                <span>
                  En los procedimientos de montaje y desmontaje se montra un boton como en la imagen con el cual se podra saltar al siguiente paso sucesivamente
                </span>
              </p>
            </div>

            <br />
            <br />

            <p>El <strong>panel derecho</strong> muestra imagenes para la mejor comprensión del paso a paso del procedimiento Seleccionado</p>

            <div>
              <img src="/recursos/compresor/imagenes/panelDerecho.png" alt="desmontaje" width="150px" />
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

export default Compresor;