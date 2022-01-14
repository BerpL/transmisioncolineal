/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';

import { Container, PoweredBy } from './styles';
import VergeViewer from '../../components/VergeViewer';
import VergePreloader from '../../components/VergePreloader';
import VergeLeftMenu from '../../components/VergeLeftMenu';
import VergeScreen from '../../components/VergeScreen';
import VergeInfo from '../../components/VergeInfo/MontajeSubestacionElectrica';
import VergeMessage from '../../components/VergeMessage'
import VergeFullScreen from '../../components/VergeFullScreen'
import VergeLockPortrait from '../../components/VergeLockPortrait'
import { AiTwotoneSliders } from 'react-icons/ai';
import { FaTh } from 'react-icons/fa';


const pasos1 = [
  {
    id: 1,
    nombre: "Señalizar el área de trabajo",
    type: "pro1",
    step: 1,
    imagenes: [1],
  },
  {
    id: 2,
    nombre: "Verificación de ausencia de tensión",
    type: "pro1",
    step: 2,
    imagenes: [3],
  },
  {
    id: 3,
    nombre: "Montaje de Crucetas",
    type: "pro1",
    step: 3,
    imagenes: [3],
  },
  {
    id: 4,
    nombre: "Izaje y sujeción del transformador",
    type: "pro1",
    step: 4,
    imagenes: [4],
  },
  {
    id: 5,
    nombre: "Montaje de seccionador y pararrayos",
    type: "pro1",
    step: 5,
    imagenes: [5],
  },
  {
    id: 6,
    nombre: "Conexión a tierra o 'aterramiento'",
    type: "pro1",
    step: 6,
    imagenes: [6],
  },
  {
    id: 7,
    nombre: "Conexión de los seccionadores",
    type: "pro1",
    step: 7,
    imagenes: [7],
  },
  {
    id: 8,
    nombre: "Conexión de las fases BT",
    type: "pro1",
    step: 8,
    imagenes: [10],
  },
  {
    id: 9,
    nombre: "Conexión de los seccionadores a la linea de distribución primaria",
    type: "pro1",
    step: 9,
    imagenes: [11],
  },
  {
    id: 10,
    nombre: "Colocación de los Stoppings",
    type: "pro1",
    step: 10,
    imagenes: [12],
  },
];



const buttons = [
  {
    menu: 2,
    id: "pro2-btn",
    icon: <FaTh />,
    title: "Inspección",
    text: "Desplázate por la escenario e inspeciona la subestación eléctrica"
  },
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiTwotoneSliders />,
    title: "Montaje y puesta en servicio de sub estación eléctrica ",
    steps: pasos1
  },

]

function MontajeSubestacionElectrica() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);


  // const canChangeMenu = useCallback((id) => {

  //   if (activeMenu === -1 && id === buttons[0].menu) return true;

  //   if (activeMenu === id) return false;

  //   if (activeMenu > id + 1) return false;

  //   if (activeMenu + 1 === id) {

  //     const buttonsTmp = buttons.filter(w => w.menu <= activeMenu);


  //     const lengths = buttonsTmp.map(x => x.steps.length);

  //     const suma = lengths.reduce((acc, element) => acc + element, 0);

  //     if (suma === step) {
  //       return true
  //     }
  //     return false;
  //   }

  //   return false;

  // }, [activeMenu, step])

  const handleChangeMenu = useCallback((id) => {
    // if (canChangeMenu(id)) {
    if (id === 2) {
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
    const btn = document.querySelector('#pro2-btn');
    btn.dispatchEvent(new Event('click'));
    setActiveMenu(2);
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
    // if (step + 1 <= suma)
    // setStep(step + 1)
  }

  return (
    <Container>
      <VergeViewer src="/applications/SubEstacion_Electrica/SubEstacion_Electrica.html" title="SubEstación Eléctrica" />
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

export default MontajeSubestacionElectrica;