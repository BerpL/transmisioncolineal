/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from "react";

import { Container, PoweredBy } from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergePreloader from "../../components/VergePreloader";
import VergeLeftMenu from "../../components/VergeLeftMenu";
import VergeScreen from "../../components/VergeScreen";
import VergeInfo from "../../components/VergeInfo/Alineamiento";
import VergeMessage from "../../components/VergeMessage";
import VergeFullScreen from "../../components/VergeFullScreen";
import VergeLockPortrait from "../../components/VergeLockPortrait";
import {
  AiTwotoneSliders,
  AiTwotoneReconciliation,
  AiTwotoneGold,
  AiTwotoneApi,
} from "react-icons/ai";

const pasos1 = [
  {
    id: 1,
    nombre: "Quitar la horquilla",
    type: "pro1",
    step: 1,
  },
  {
    id: 2,
    nombre: "Conecte los elementos de izaje",
    type: "pro1",
    step: 2,
    imagenes: null,
  },
  {
    id: 3,
    nombre: "Retire la bomba de barrido",
    type: "pro1",
    step: 3,
  },
  {
    id: 4,
    nombre: "Retire los pernos de la carcasa",
    type: "pro1",
    step: 4,
  },
  {
    id: 5,
    nombre: "Retire la carcasa",
    type: "pro1",
    step: 5,
  },
  {
    id: 6,
    nombre: "Extrae el conjunto piloto de mando de bomba",
    type: "pro1",
    step: 6,
  },
  {
    id: 7,
    nombre: "Quite la placa y arandela",
    type: "pro1",
    step: 7,
  },
  {
    id: 8,
    nombre: "Desarme de la caja giratoria",
    type: "pro1",
    step: 8,
  },
  {
    id: 9,
    nombre: "Retire rodamiento del conjunto turbina y soporte",
    type: "pro1",
    step: 9,
  },
  {
    id: 10,
    nombre: "Quite el estator",
    type: "pro1",
    step: 10,
  },
  {
    id: 11,
    nombre: "Retire rodamiento del conjunto del rodete y pista de rodamiento",
    type: "pro1",
    step: 11,
  },
  {
    id: 12,
    nombre: "Extraiga la turbina del convertidor",
    type: "pro1",
    step: 12,
  },
  {
    id: 13,
    nombre: "Retire la caja giratoria",
    type: "pro1",
    step: 13,
  },
  {
    id: 14,
    nombre: "Quite la maza",
    type: "pro1",
    step: 14,
  },
  {
    id: 15,
    nombre: "Desmonte los platos y discos del embrague de traba",
    type: "pro1",
    step: 15,
  },
  {
    id: 16,
    nombre: "Retire el pistón de embrague",
    type: "pro1",
    step: 16,
  },
  {
    id: 17,
    nombre: "Levante la caja de embrague",
    type: "pro1",
    step: 17,
  },
  {
    id: 18,
    nombre: "Quite el conjunto de maza de rodete",
    type: "pro1",
    step: 18,
  },
  {
    id: 19,
    nombre: "Retire rodete del Convertidor",
    type: "pro1",
    step: 19,
  },
  {
    id: 20,
    nombre: "Retire conjunto de adaptador de embrague de impulsor",
    type: "pro1",
    step: 20,
  },
];

const buttons = [
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiTwotoneSliders />,
    title: "Desarmado del convertidor",
    steps: pasos1,
  },
];

function DesarmadoConvertidor() {
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
      <VergeViewer
        src="/applications/desarmado_del_convertidor/desarmado_del_convertidor.html"
        title="Desarmado del convertidor"
      />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <VergeLeftMenu
        buttons={buttons}
        activeMenu={activeMenu}
        onChangeMenu={handleChangeMenu}
        step={step}
        nextStep={nextStep}
        onNext={handleNext}
      />
      <VergeScreen path="/recursos/alineamiento/imagenes" images={images} />
      <VergeMessage />
      <VergeFullScreen />
      {/* <VergeInfo /> */}
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader />
    </Container>
  );
}

export default DesarmadoConvertidor;
