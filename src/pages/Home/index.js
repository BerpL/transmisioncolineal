/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';

import { Container, PoweredBy } from './styles';
import VergeViewer from '../../components/VergeViewer';
import VergePreloader from '../../components/VergePreloader';
import VergeLeftMenu from '../../components/VergeLeftMenu';
import VergeScreen from '../../components/VergeScreen';
import VergeInfo from '../../components/VergeInfo/Compresor';
import VergeNext from '../../components/VergeNext';
import VergeMessage from '../../components/VergeMessage'
import VergeFullScreen from '../../components/VergeFullScreen'
import VergeLockPortrait from '../../components/VergeLockPortrait'
import { FaCog, FaCogs } from 'react-icons/fa';


const pasosMontaje = [
  {
    id: 0,
    nombre: "Paso 1",
    type: "section",
  },
  {
    id: 1,
    nombre: "Ensamble del Cigüeñal",
    type: "m",
    step: 1,
    imagenes: [31]
  },
  {
    id: 2,
    nombre: "  Ajustar Cigüeñal (pernos x4)",
    type: "m",
    step: 2,
    imagenes: [30]
  },
  {
    id: 3,
    nombre: "Paso 2",
    type: "section",
  },
  {
    id: 4,
    nombre: "Montaje de Pistón B",
    type: "m",
    step: 3,
    imagenes: [27]
  },
  {
    id: 5,
    nombre: "Ensamble seguro de Pistón B",
    type: "m",
    step: 4,
    imagenes: [23]
  },
  {
    id: 6,
    nombre: "Ajustar Pistón (pernos x2)",
    type: "m",
    step: 5,
  },
  {
    id: 7,
    nombre: "Montaje de Pistón A",
    type: "m",
    step: 6,
    imagenes: [27]
  },
  {
    id: 10,
    nombre: "Paso 3",
    type: "section",
  },
  {
    id: 11,
    nombre: "Ensamble Tapa Trasera",
    type: "m",
    step: 7,
    imagenes: [19, 18]
  },
  {
    id: 12,
    nombre: "Ajustar Tapa Trasera (pernos x6)",
    type: "m",
    step: 8,
  },
  {
    id: 13,
    nombre: "Paso 4",
    type: "section",
  },
  {
    id: 14,
    nombre: "Ensamble Empaque",
    type: "m",
    step: 9,
  },
  {
    id: 15,
    nombre: "Montaje cilindros en carcasa B",
    type: "m",
    step: 10,
  },
  {
    id: 16,
    nombre: "Ensamble Carcasa B",
    type: "m",
    step: 11,
    imagenes: [17]
  },
  {
    id: 17,
    nombre: "Ensamble Tapa Frontal",
    type: "m",
    step: 12,
    imagenes: [16]
  },
  {
    id: 18,
    nombre: "Ajustar Tapa Frontal (pernos x8)",
    type: "m",
    step: 13,
  },
  {
    id: 19,
    nombre: "Paso 5",
    type: "section",
  },
  {
    id: 20,
    nombre: "Montaje de la válvula B",
    type: "m",
    step: 14,
    imagenes: [8]
  },
  {
    id: 21,
    nombre: "Ajustar válvula(pernos x2)",
    type: "m",
    step: 15,
    imagenes: [7]
  },
  {
    id: 22,
    nombre: "Montaje de válvula A",
    type: "m",
    step: 16,
    imagenes: [8]
  },
  {
    id: 23,
    nombre: "Ajustar válvula(pernos x2)",
    type: "m",
    step: 17,
    imagenes: [7]
  },
  {
    id: 24,
    nombre: "Ensamble Gobernador de Aire",
    type: "m",
    step: 18,
  },
  {
    id: 25,
    nombre: "Ajustar Gobernador de Aire (pernos x3)",
    type: "m",
    step: 19,
  },
  {
    id: 26,
    nombre: "Paso 6",
    type: "section",
  },
  {
    id: 27,
    nombre: "Montaje de Conexión de Descarga",
    type: "m",
    step: 20,
  },
  {
    id: 28,
    nombre: "Ajustar Conexión de Descarga (pernos x2)",
    type: "m",
    step: 21,
    imagenes: [2]
  },
];


const pasosDesmontaje = [
  {
    id: 0,
    nombre: "Paso 1",
    type: "section",
  },
  {
    id: 1,
    nombre: "Desajustar Conexión de Descarga (pernos x2)",
    type: "d",
    step: 1,
  },
  {
    id: 2,
    nombre: "Desmontaje de Conexión de Descarga",
    type: "d",
    step: 2,
  },
  {
    id: 2.5,
    nombre: "Paso 2",
    type: "section",
  },
  {
    id: 3,
    nombre: "Desajustar Gobernador de Aire (pernos x3)",
    type: "d",
    step: 3,
    imagenes: [7, 8]
  },
  {
    id: 4,
    nombre: "Desacoplar Gobernador de Aire",
    type: "d",
    step: 4,
  },
  {
    id: 5,
    nombre: "Desajustar Válvula A(pernos x2)",
    type: "d",
    step: 5,
  },
  {
    id: 6,
    nombre: "Desmontaje de la Válvula A",
    type: "d",
    step: 6,
  },
  {
    id: 7,
    nombre: "Desajustar Válvula B(pernos x2)",
    type: "d",
    step: 7,
  },
  {
    id: 8,
    nombre: "Desmontaje de la Válvula B",
    type: "d",
    step: 8,
  },
  {
    id: 9,
    nombre: "Paso 3",
    type: "section",
  },
  {
    id: 10,
    nombre: "Desajustar Tapa Frontal (pernos x8)",
    type: "d",
    step: 9,
  },
  {
    id: 11,
    nombre: "Desacoplar Tapa Frontal",
    type: "d",
    step: 10,
  },
  {
    id: 12,
    nombre: "Desacoplar Carcasa B",
    type: "d",
    step: 11,
    imagenes: [17]
  },
  {
    id: 13,
    nombre: "Retirar Cilindros de Carcasa B",
    type: "d",
    step: 12,
  },
  {
    id: 14,
    nombre: "Desacoplar Empaque",
    type: "d",
    step: 13,
  },
  {
    id: 15,
    nombre: "Paso 4",
    type: "section",
  },
  {
    id: 16,
    nombre: "Desajustar Tapa Trasera (pernos x6)",
    type: "d",
    step: 14,
    imagenes: [18]
  },
  {
    id: 17,
    nombre: "Desacoplar Tapa Trasera",
    type: "d",
    step: 15,
  },
  {
    id: 18,
    nombre: "Paso 5",
    type: "section",
  },
  {
    id: 19,
    nombre: "Desajustar Piston A (pernos x2)",
    type: "d",
    step: 16,
    imagenes: [22]
  },
  {
    id: 20,
    nombre: "Desacoplar seguro de Válvula A",
    type: "d",
    step: 17,
    imagenes: [23]
  },
  {
    id: 21,
    nombre: "Desmontaje de Pistón A",
    type: "d",
    step: 18,
    imagenes: [26, 27]
  },
  {
    id: 22,
    nombre: "Desmontaje Piston B",
    type: "d",
    step: 19,
    imagenes: [28]
  },
  {
    id: 25,
    nombre: "Paso 6",
    type: "section",
  },
  {
    id: 26,
    nombre: "Desajustar Cigüeñal (pernos x4)",
    type: "d",
    step: 20,
    imagenes: [29]
  },
  {
    id: 27,
    nombre: "Desacoplar el Cigüeñal",
    type: "d",
    step: 21,
    imagenes: [31]
  },
];

const buttons = [
  
  {
    menu: 3,
    id: "desmontaje",
    icon: <FaCogs />,
    title: "Desmontaje",
    steps: pasosDesmontaje,
  },
  {
    menu: 2,
    id: "montaje",
    icon: <FaCog />,
    title: "Montaje",
    steps: pasosMontaje,
  },
]

function Home() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);

  const handleChangeMenu = useCallback((id) => {
    // if (canChangeMenu(id)) {
      setStep(0)
      setImages(null);
      setActiveMenu(id);
    // }
  }, [activeMenu])

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

  const handleChangeState = useCallback((e) => {
    setNextStep(parseInt(e.target.value) + 1);
  }, [])

  //console.log("nextStep", nextStep);

  useEffect(() => {
    const input = document.querySelector('#estado_animacion');
    input.addEventListener("input", handleChangeState)
    return () => input.removeEventListener("input", handleChangeState)

  }, [])

  return (
    <Container>
      <VergeViewer src="/applications/Compresor_laboratorio/Compresor_laboratorio.html" title="Compresor" />
      <input className="animacion" id="estado_animacion" defaultValue="0" />
      <VergeLeftMenu
        buttons={buttons}
        onChangeMenu={handleChangeMenu}
        step={step}
        activeMenu={activeMenu}
        nextStep={nextStep}
        onNext={handleNext}
      />
      <VergeScreen path="/recursos/compresor/imagenes" images={images} />
      <VergeMessage />
      <VergeFullScreen />
      <VergeNext activeMenu={activeMenu} onNext={handleNext} buttons={buttons} />
      <VergeInfo />
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader />
    </Container>
  )
}

export default Home;