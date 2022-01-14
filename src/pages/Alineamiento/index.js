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
    nombre: "Identificación de Equipos",
    type: "pro1",
    step: 1,
  },
  {
    id: 2,
    nombre: "Equipo de seguridad",
    type: "pro1",
    step: 2,
    imagenes: null,
  },
  {
    id: 3,
    nombre: "Desacople del equipo fijo",
    type: "pro1",
    step: 3,
  },
  {
    id: 4,
    nombre: "Verificación del eje",
    type: "pro1",
    step: 4,
  },
  {
    id: 5,
    nombre: "Desmontaje del acople",
    type: "pro1",
    step: 5,
    imagenes: [1],
  },
  {
    id: 6,
    nombre: "Montaje de la Base Magnética",
    type: "pro1",
    step: 6,
    imagenes: [2],
  },
  {
    id: 7,
    nombre: "Verificación de Pandeo del Eje",
    type: "pro1",
    step: 7,
    imagenes: [2],
  },
];

const pasos2 = [
  {
    id: 1,
    nombre: "Montaje del acople",
    type: "pro2",
    step: 8,
    imagenes: [1],
  },
  {
    id: 2,
    nombre: "Montaje de la base magnética con el reloj comparador",
    type: "pro2",
    step: 9,
    imagenes: [2],
  },
  {
    id: 3,
    nombre: "Control del Acople",
    type: "pro2",
    step: 10,
  },
];

const pasos3 = [
  {
    id: 1,
    nombre: "Desmontaje de pernos del motor",
    type: "pro3",
    step: 11,
  },
  {
    id: 2,
    nombre: "Verificación de holguras entre la pata del motor y la base",
    type: "pro3",
    step: 12,
  },
  {
    id: 3,
    nombre: "Rellenado con láminas entre del motor y la base",
    type: "pro3",
    step: 13,
    imagenes: [5],
  },
  {
    id: 4,
    nombre: "Ajuste de pernos",
    type: "pro3",
    step: 14,
  },
  {
    id: 5,
    nombre: "Montaje el reloj palpador",
    type: "pro3",
    step: 15,
    imagenes: [4],
  },
  {
    id: 6,
    nombre: "Ajuste de la tuerca del perno",
    type: "pro3",
    step: 16,
    imagenes: [4],
  },
];

const pasos4 = [
  {
    id: 1,
    nombre: "Acoplamiento del equipo fijo",
    type: "pro4",
    step: 17,
  },
  {
    id: 2,
    nombre: "Verificación acoples en plano vertical",
    type: "pro4",
    step: 18,
    imagenes: [6],
  },
  {
    id: 3,
    nombre: "Verificación acoples en plano horizontal",
    type: "pro4",
    step: 19,
    imagenes: [6],
  },
  {
    id: 5,
    nombre: "Montaje de relojes sobre los ejes",
    type: "pro4",
    step: 20,
    imagenes: [8],
  },
  {
    id: 6,
    nombre: "Corregir el plano vertical y horizontal",
    type: "pro4",
    step: 21,
    imagenes: [10],
  },
  {
    id: 7,
    nombre: "Verificación de control de movimiento de pata (x4)",
    type: "pro4",
    step: 22,
  },
  {
    id: 8,
    nombre: "Ajuste de motor a la base",
    type: "pro4",
    step: 23,
  },
];

const buttons = [
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiTwotoneSliders />,
    title: "Control de pandeo del eje",
    steps: pasos1,
  },
  {
    menu: 2,
    id: "pro2-btn",
    icon: <AiTwotoneReconciliation />,
    title: "Control del acople",
    steps: pasos2,
  },
  {
    menu: 3,
    id: "pro3-btn",
    icon: <AiTwotoneGold />,
    title: "Control de la pata coja",
    steps: pasos3,
  },
  {
    menu: 4,
    id: "pro4-btn",
    icon: <AiTwotoneApi />,
    title: "Tarea de alineamiento (método dial invertido)",
    steps: pasos4,
  },
];

function Alineamiento() {
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
        src="/applications/Alineamiento_eje/Alineamiento_eje.html"
        title="Alineamiento"
      />
      <div
        style={{
          zIndex: 99,
          display: "none",
          position: "absolute",
          width: "100%",
          minWidth: "500px",
          height: "100%",
        }}
        id="juego"
      >
        <iframe
          src="https://wordwall.net/play/14763/600/412"
          frameborder="0"
          allowFullscreen
          title="Juego"
          width="100%"
        ></iframe>
        <button
          id="cerrar-juego"
          style={{
            position: "absolute",
            left: "10px",
            top: "10px",
            padding: "10px",
            background: "#35b7ff",
            border: "none",
            borderRadius: "5px",
            display: "none",
            cursor: "pointer",
          }}
        >
          Cerrar
        </button>
      </div>
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
      <VergeInfo />
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader />
    </Container>
  );
}

export default Alineamiento;
