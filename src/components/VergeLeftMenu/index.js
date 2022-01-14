/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef, useCallback, createRef } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaCheckCircle } from 'react-icons/fa';

import { Container, Item, Menu, Content, Title, Li, ToggleIcon } from './styles';


function VergeLi({ number, text, type, activeMenu, step, menu, onNext, imagenes = null, nextStep = false }) {

  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setClicked(false);
  }, [activeMenu])


  useEffect(() => {
    if (menu === activeMenu) {
      if (number <= step) {
        setClicked(true);
      }
    }
  }, [step])

  const handleClick = () => {
    if (type !== "section") {
      if (!clicked) {
        if (step + 1 === number) {

          if (!nextStep) onNext(imagenes || null)


          if (step + 1 === nextStep) {
            onNext(imagenes || null)
          }

        }
      }
    }
  }

  const canHover = () => {

    if (!nextStep) return step + 1 >= number;

    return step + 1 >= number && step + 1 === nextStep;

    // return true;
  }


  return (
    <Li canHover={canHover()} className={`${clicked && "done"} ${type === "section" && "section"}`} onClick={handleClick}>
      {type !== "section" && <FaCheckCircle style={{ flexShrink: 0 }} />}
      <a id={`${type}-paso${number}`}>{text}</a>
    </Li>
  )
}

function VergeLeftMenu({
  onChangeMenu,
  step,
  onNext,
  activeMenu,
  nextStep,
  openFirstMenu = false,
  buttons }) {
  const [open, setIsOpen] = useState(false);
  const menusRef = useRef(buttons.map(() => createRef()));
  const toggleContent = () => {
    setIsOpen(!open);
  }
  const handleChangeMenu = (id) => () => {
    if (id !== activeMenu) onChangeMenu(id);

    if (activeMenu === -1) {
      setIsOpen(true);
    }
    if (id === activeMenu) {
      setIsOpen(!open);
    } else {
      setIsOpen(true);
    }
  }


  useEffect(() => {
    if (openFirstMenu) {
      setIsOpen(true);
    }
  }, [])

  useEffect(() => {

    buttons.forEach((button, index) => {
      if (activeMenu === button.menu) {
        if (menusRef.current[index].current) {
          menusRef.current[index].current.scrollTo(0, 0);
        }
      }
    })
    onChangeMenu(activeMenu);
  }, [activeMenu, onChangeMenu])

  // useEffect(() => {
  //   if (buttons.length) {
  //     onChangeMenu(buttons[0].menu);
  //   }
  // }, [])



  const renderView = useCallback((button) => {
    if (button.steps) {
      return (
        <ul>
          {button.steps.map((i) => (
            <VergeLi
              activeMenu={activeMenu}
              step={step}
              menu={button.menu}
              onNext={onNext}
              type={i.type}
              key={i.id}
              nextStep={nextStep}
              number={i.step}
              text={i.nombre}
              imagenes={i.imagenes} />
          ))}
        </ul>
      )
    } else if (button.text) {
      return <p>{button.text}</p>
    }

    return null;
  }, [activeMenu, step, onNext])


  return (
    <Container>
      <ToggleIcon onClick={toggleContent}>
        {open ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </ToggleIcon>
      <Menu>
        {buttons.map((button) => (
          <Item key={button.menu} className={activeMenu === button.menu && "active"} onClick={handleChangeMenu(button.menu)}>
            <a id={button.id}>{button.icon}</a>
          </Item>
        ))}
      </Menu>
      {buttons.map((button, index) => (
        <Content numberButtons={buttons.length} ref={menusRef.current[index]} key={button.menu} open={open && activeMenu === button.menu}  >
          <Title>{button.title}</Title>
          {renderView(button)}
        </Content>
      ))}
    </Container>
  );
}

export default VergeLeftMenu;