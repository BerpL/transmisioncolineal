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
          <Title>Sobre la experiencia Alineamiento</Title>
          <Content>
            <p>Durante las diferentes etapas de la experiencia podrás:
            </p>
            <ul style={{ listStyleType: "circle" }}>
              <li> Montar y desmontar las piezas del Modelo a medida que avancemos y sea necesario durante la experiencia</li>
              <li> Obtener información de cada pieza</li>
              <li> Manipular las piezas</li>
              <li> Interactuar con los relojes y su base magnética para acomodarlo según corresponda por cada paso</li>
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

            <SubTitle>Control de pandeo de eje</SubTitle>
            <div>
              <img src="/recursos/alineamiento/imagenes/p1.png" alt="piezas" width="200px" />
              <p>
                <span>
                  Desplázate por la mesa y pasa el cursor por encima de una etiqueta para identificar el nombre de la pieza
                </span>

              </p>
            </div>
            <br />
            <br />

            <SubTitle>Control del acople</SubTitle>

            <div>
              <img src="/recursos/alineamiento/imagenes/p2.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                En esta etapa de la experiencia aprenderemos a verificar que el eje no tenga rebabas ni se encuentre en mal estado tanto físicamente como su alineamiento (pandeo), teniendo apoyo visual de cómo realizar esta etapa. Además podrás interactuar con el reloj comparador para realizar esta tarea
               
              </span>
              </p>
            </div>
            <br />
            <br />
            <SubTitle>Control de pata coja</SubTitle>

            <div>
              <img src="/recursos/alineamiento/imagenes/p3.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                En esta etapa de la experiencia, aprenderemos a utilizar un feeler gauge para medir la holgura que hay en las patas del motor. Además utilizaremos un reloj palpador para 	verificar que la pata coja no sobrepase los valores mencionados en la experiencia.
                 
                </span>
              </p>
            </div>
            <br />
            <br />
            <SubTitle>Tarea de alineamiento</SubTitle>

            <div>
              <img src="/recursos/alineamiento/imagenes/p4.png" alt="desmontaje" width="200px" />
              <p>
                <span>
                En esta etapa de la experiencia, siendo la más importante de todas. aprenderemos a utilizar un reloj comparador con todos sus accesorios para montarlo sobre la máquina fija y móvil  para verificar que  la alineación tanto como en el plano horizontal y el plano vertical sean correctas al momento de estar acoplados. Además de que aprenderemos a realizar los cálculos para estimar si ajustamos o desajustamos las patas del motor.
                </span>
                           
              </p>
            </div>
            <br />
            <br />
            <p>El <strong>panel derecho</strong> muestra imagenes para la mejor comprensión del paso a paso del procedimiento Seleccionado</p>
            <div>
              <img src="/recursos/alineamiento/imagenes/panelDerecho.png" alt="desmontaje" width="150px" />
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