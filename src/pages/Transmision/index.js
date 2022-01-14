/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from "react";

import {
  Container,
  PoweredBy,
  RightArrow,
  Controls,
  LeftArrow,
  TopArrow,
  BotArrow,
} from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergePreloader from "../../components/VergePreloader";
import VergeLeftMenu from "../../components/VergeLeftMenu";
import VergeScreen from "../../components/VergeScreen";
import VergeInfo from "../../components/VergeInfo/Transmision";
import VergeMessage from "../../components/VergeMessage";
import VergeFullScreen from "../../components/VergeFullScreen";
import VergeLockPortrait from "../../components/VergeLockPortrait";
import { AiTwotoneSliders } from "react-icons/ai";
import { FaTh } from "react-icons/fa";

const pasos1 = [
  {
    id: 1,
    nombre: "Desmontaje de la carcaza",
    type: "pro1",
    step: 1,
  },
  {
    id: 2,
    nombre: "Desmontaje del conjunto del múltiple",
    type: "pro1",
    step: 2,
  },
  {
    id: 3,
    nombre: "Desmontaje de placa de montaje de embrague de 2da Velocidad",
    type: "pro1",
    step: 3,
  },
  {
    id: 4,
    nombre: "Desmontaje de Tapa de carcaza – Embrague de 1ra",
    type: "pro1",
    step: 4,
  },  
  {
    id: 5,
    nombre: "Desmontaje de embragues de 2da y 1ra velocidad",
    type: "pro1",
    step: 5,
  },
  {
    id: 6,
    nombre: "Desmontaje de embrague de 3ra Velocidad",
    type: "pro1",
    step: 6,
  },
  {
    id: 7,
    nombre: "Desmontaje del conjunto del eje de entrada y salida",
    type: "pro1",
    step: 7,
  },  
  {
    id: 8,
    nombre: "Desmontaje de placa y embrague de avance",
    type: "pro1",
    step: 8,
  },
  {
    id: 9,
    nombre: "Desmontaje de corona de avance y conjunto de porta planetarios de 3ra y avance",
    type: "pro1",
    step: 9,
  },
  {
    id: 10,
    nombre: "Desmontaje de paquete de retroceso",
    type: "pro1",
    step: 10,
  },
];

const buttons = [
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiTwotoneSliders />,
    title: "Transmisión colineal",
    steps: pasos1,
  },
];

function Transmision() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);

  const canChangeMenu = useCallback(
    (id) => {
      if (activeMenu === -1 && id === buttons[0].menu) return true;

      if (activeMenu === id) return false;

      if (activeMenu > id + 1) return false;

      if (activeMenu + 1 === id) {
        const buttonsTmp = buttons.filter((w) => w.menu <= activeMenu);

        const lengths = buttonsTmp.map((x) => x.steps.length);

        const suma = lengths.reduce((acc, element) => acc + element, 0);

        if (suma === step) {
          return true;
        }
        return false;
      }

      return false;
    },
    [activeMenu, step]
  );

  const handleChangeMenu = useCallback(
    (id) => {
      if (canChangeMenu(id)) {
        setActiveMenu(id);
      }
    },
    [activeMenu, step]
  );

  useEffect(() => {
    setImages(null);
  }, [activeMenu]);

  const handleChangeState = useCallback((e) => {
    setNextStep(parseInt(e.target.value) + 1);
  }, []);

  //console.log("nextStep", nextStep);

  useEffect(() => {
    const input = document.querySelector("#estado_animacion");
    input.addEventListener("input", handleChangeState);
    return () => input.removeEventListener("input", handleChangeState);
  }, []);

  const handleNext = (imagenes = null) => {
    if (!imagenes) {
      let paso;

      buttons.forEach((button) => {
        if (!button.steps) return;
        if (activeMenu === button.menu) {
          paso = button.steps.find((x) => parseInt(x.step) === step + 1);
        }
      });

      if (paso) {
        setImages(paso.imagenes || null);
      } else {
        setImages(null);
      }
    } else {
      setImages(imagenes);
    }
    const buttonsTmp = buttons.filter((w) => w.menu <= activeMenu);
    const lengths = buttonsTmp.map((x) => x.steps.length);
    const suma = lengths.reduce((acc, element) => acc + element, 0);
    if (step + 1 <= suma && step + 1 === nextStep) setStep(step + 1);
  };

  return (
    <Container>
      <VergeViewer src="/applications/transmision_colineal/transmision_colineal.html" title="Transmision" />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <VergeLeftMenu
        buttons={buttons}
        activeMenu={activeMenu}
        openFirstMenu
        onChangeMenu={handleChangeMenu}
        step={step}
        nextStep={nextStep}
        onNext={handleNext}
      />
      <VergeScreen
        path="/recursos/alineamiento/imagenes"
        images={images}
      />
      <VergeMessage />
      <VergeFullScreen />
      <VergeInfo />
      <Controls>
        <LeftArrow
          id="left_arrow"
          src="applications/transmision_colineal/img/left_arrow.svg"
          alt="left arrow"
          draggable="false"
        />
        <RightArrow
          id="right_arrow"
          src="applications/transmision_colineal/img/right_arrow.svg"
          alt="right arrow"
          draggable="false"
        />
        <TopArrow
          id="top_arrow"
          src="applications/transmision_colineal/img/top_arrow.svg"
          alt="top arrow"
          draggable="false"
        />
        <BotArrow
          id="bot_arrow"
          src="applications/transmision_colineal/img/bot_arrow.svg"
          alt="bot arrow"
          draggable="false"
        />
      </Controls>
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader />
    </Container>
  );
}

export default Transmision;
