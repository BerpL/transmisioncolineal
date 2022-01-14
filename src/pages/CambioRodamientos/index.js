/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';

import { Container, PoweredBy } from './styles';
import VergeViewer from '../../components/VergeViewer';
import VergePreloader from '../../components/VergePreloader';
import VergeLeftMenu from '../../components/VergeLeftMenu';
import VergeScreen from '../../components/VergeScreen';
import VergeInfo from '../../components/VergeInfo/CambioRodamientos';
import VergeMessage from '../../components/VergeMessage'
import VergeFullScreen from '../../components/VergeFullScreen'
import VergeLockPortrait from '../../components/VergeLockPortrait'
import { AiTwotoneSliders, AiTwotoneReconciliation, AiTwotoneGold } from 'react-icons/ai';


const pasos1 = [
  {
    id: 1,
    nombre: "Retiro de Pernos",
    type: "pro1",
    step: 1,
    imagenes: [1],
  },
  {
    id: 2,
    nombre: "Retiro de la tapa del Motor",
    type: "pro1",
    step: 2,
    imagenes: [2],
  },
];

const pasos2 = [
  {
    id: 1,
    nombre: "Desmontaje del Rodamiento",
    type: "pro2",
    step: 3,
    imagenes: [3],
  },
  {
    id: 2,
    nombre: "Selección del anillo de impacto",
    type: "pro2",
    step: 4,
    imagenes: [4],
  },
  {
    id: 3,
    nombre: "Dilatación del Rodamiento",
    type: "pro2",
    step: 5,
    imagenes: [5],
  },
  {
    id: 4,
    nombre: "Colocación del Rodamiento",
    type: "pro2",
    step: 6,
    imagenes: [6],
  },
];

const pasos3 = [
  {
    id: 1,
    nombre: "Montaje de la Tapa del Motor",
    type: "pro3",
    step: 7,
    imagenes: [2],
  },
  {
    id: 2,
    nombre: "Colocación de Pernos",
    type: "pro3",
    step: 8,
    imagenes: [1],
  },
];





const buttons = [
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiTwotoneSliders />,
    title: "Desmontaje de la tapa del Motor",
    steps: pasos1
  },
  {
    menu: 2,
    id: "pro2-btn",
    icon: <AiTwotoneReconciliation />,
    title: "Cambio de Rodamiento",
    steps: pasos2,
  },
  {
    menu: 3,
    id: "pro3-btn",
    icon: <AiTwotoneGold />,
    title: "Montaje de la tapa del Motor",
    steps: pasos3,
  },
]

function CambioRodamientos() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);


  const canChangeMenu = useCallback((id) => {

    if (activeMenu === -1 && id === buttons[0].menu) return true;

    if (activeMenu === id) return false;

    if (activeMenu > id + 1) return false;

    if (activeMenu + 1 === id) {

      const buttonsTmp = buttons.filter(w => w.menu <= activeMenu);


      const lengths = buttonsTmp.map(x => x.steps.length);

      const suma = lengths.reduce((acc, element) => acc + element, 0);

      if (suma === step) {
        return true
      }
      return false;
    }

    return false;

  }, [activeMenu, step])

  const handleChangeMenu = useCallback((id) => {
    if (canChangeMenu(id)) {
      setActiveMenu(id);
    }
  }, [activeMenu, step])


  useEffect(() => {
    setImages(null);
  }, [activeMenu])


  const handleChangeState = useCallback((e) => {
    setNextStep(parseInt(e.target.value) + 1);
  }, [])

  //console.log("nextStep", nextStep);

  useEffect(() => {
    const input = document.querySelector('#estado_animacion');
    input.addEventListener("input", handleChangeState)
    return () => input.removeEventListener("input", handleChangeState)

  }, [])

  const handleNext = (imagenes = null) => {

    if (!imagenes) {
      let paso;

      buttons.forEach((button) => {
        if (!button.steps) return;
        if (activeMenu === button.menu) {
          paso = button.steps.find(x => parseInt(x.step) === step + 1)
        }
      })

      if (paso) {
        setImages(paso.imagenes || null)
      } else {
        setImages(null)
      };


    } else {
      setImages(imagenes);

    }
    const buttonsTmp = buttons.filter(w => w.menu <= activeMenu);
    const lengths = buttonsTmp.map(x => x.steps.length);
    const suma = lengths.reduce((acc, element) => acc + element, 0);
    if (step + 1 <= suma && step + 1 === nextStep)
      setStep(step + 1)

  }

  return (
    <Container>
      <VergeViewer src="/applications/Rodamientos_Motor/Rodamientos_Motor.html" title="Alineamiento" />
      <input id="estado_animacion" defaultValue="0" style={{ display: "none" }} />
      <VergeLeftMenu
        buttons={buttons}
        activeMenu={activeMenu}
        onChangeMenu={handleChangeMenu}
        step={step}
        nextStep={nextStep}
        onNext={handleNext} />
      <VergeScreen path="/recursos/cambio-rodamientos/imagenes" images={images} />
      <VergeMessage />
      <VergeFullScreen />
      <VergeInfo />
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader />
    </Container>
  )
}

export default CambioRodamientos;