/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';

import { Container, PoweredBy } from './styles';
import VergeViewer from '../../components/VergeViewer';
import VergePreloader from '../../components/VergePreloader';
import VergeLeftMenu from '../../components/VergeLeftMenu';
import VergeScreen from '../../components/VergeScreen';
import VergeInfo from '../../components/VergeInfo/Convertidor';
import VergeMessage from '../../components/VergeMessage'
import VergeFullScreen from '../../components/VergeFullScreen'
import VergeLockPortrait from '../../components/VergeLockPortrait'
import { AiOutlineDashboard, AiOutlineSetting } from 'react-icons/ai';
import { FaTh, FaDelicious } from 'react-icons/fa';

const pasos1 = [
  {
    id: 1,
    nombre: "Motor diesel",
    type: "pro1",
    step: 1,
    imagenes: null,
  },
  {
    id: 2,
    nombre: "Sistema de refrigerción",
    type: "pro1",
    step: 2,
    imagenes: null,
  },
  {
    id: 3,
    nombre: "Sistema de arranque",
    type: "pro1",
    step: 3,
    imagenes: null,
  },
  {
    id: 4,
    nombre: "Panel de control",
    type: "pro1",
    step: 4,
    imagenes: null,
  },
  {
    id: 5,
    nombre: "Turbo compresor",
    type: "pro1",
    step: 5,
    imagenes: null,
  },
  {
    id: 6,
    nombre: "Sistema eléctrico",
    type: "pro1",
    step: 6,
    imagenes: null,
  },
  {
    id: 7,
    nombre: "Tanque de combustible",
    type: "pro1",
    step: 7,
    imagenes: null,
  },
  {
    id: 8,
    nombre: "Sistema de aire y escape",
    type: "pro1",
    step: 8,
    imagenes: null,
  },
  {
    id: 9,
    nombre: "Generador sincrónico",
    type: "pro1",
    step: 9,
    imagenes: null,
  },
  {
    id: 10,
    nombre: "Inyección de combustible",
    type: "pro1",
    step: 10,
    imagenes: null,
  },
];

const pasos2 = [
  {
    id: 1,
    nombre: "Lubricación",
    type: "pro2",
    step: 11,
    imagenes: null,
  },
  {
    id: 2,
    nombre: "Refrigerante",
    type: "pro2",
    step: 12,
    imagenes: null,
  },
  {
    id: 3,
    nombre: "Filtro",
    type: "pro2",
    step: 13,
    imagenes: null,
  },
  {
    id: 4,
    nombre: "Combustible",
    type: "pro2",
    step: 14,
    imagenes: null,
  },
  {
    id: 5,
    nombre: "Batería",
    type: "pro2",
    step: 15,
    imagenes: null,
  },
];

const pasos3 = [
  {
    id: 1,
    nombre: "Encendido",
    type: "pro3",
    step: 16,
    imagenes: null,
  },
 
];

const buttons = [
  {
    menu: 4,
    id: "pro4-btn",
    icon: <FaTh />,
    title: "Inspección General",
    text: "Desplázate por la escenario e inspeciona el grupo electrógeno"
  },
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiOutlineSetting />,
    title: "Inspección por sistemas",
    steps: pasos1
  },
  {
    menu: 2,
    id: "pro2-btn",
    icon: <FaDelicious />,
    title: "Inspección por partes",
    steps: pasos2
  },
  {
    menu: 3,
    id: "pro3-btn",
    icon: <AiOutlineDashboard />,
    title: "Encendido",
    steps: pasos3
  },
]

function Convertidor() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);

  const handleChangeMenu = useCallback((id) => {
    // if (canChangeMenu(id)) {
    if (id === 4) {
      setStep(0);
    }
    setActiveMenu(id);
    // }
  }, [activeMenu, step])


  useEffect(() => {
    setImages(null);
  }, [activeMenu])


  const handleChangeState = useCallback((e) => {
    console.log(e.target.value);
    setNextStep(parseInt(e.target.value) + 1);
  }, [])

  //console.log("nextStep", nextStep);

  useEffect(() => {
    const input = document.querySelector('#estado_animacion');
    const btn = document.querySelector('#pro4-btn');
    btn.dispatchEvent(new Event('click'));
    setActiveMenu(4);
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
console.log(buttons)
      if (paso) {
        setImages(paso.imagenes || null)
      } else {
        setImages(null)
      };


    } else {
      setImages(imagenes);

    }
    const buttonsTmp = buttons.filter(w => w.menu <= activeMenu);
    console.log(buttonsTmp)
    const lengths = buttonsTmp.map(x => x.steps.length);
    const suma = lengths.reduce((acc, element) => acc + element, 0);
    if (step + 1 <= suma && step + 1 === nextStep)
      setStep(step + 1)
    // if (step + 1 <= suma)
    // setStep(step + 1)
  }

  return (
    <Container>
      <VergeViewer src="/applications/grupo_electrogeno/grupo_electrogeno.html" title="Convertidor" />
      <input id="estado_animacion" defaultValue="0" style={{ display: "none" }} />
      <VergeLeftMenu
        buttons={buttons}
        activeMenu={activeMenu}
        openFirstMenu
        onChangeMenu={handleChangeMenu}
        step={step}
        nextStep={nextStep}
        onNext={handleNext} />
      <VergeScreen path="/recursos/subestacion_electrica/imagenes" images={images} />
      <VergeMessage />
      <VergeFullScreen />
      <VergeInfo />
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader />
    </Container>
  )
}

export default Convertidor;