/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container } from './styles';



function VergeNext({ activeMenu, onNext, buttons }) {



  return (
    <>
      {buttons.map((button) => {
        if (!button.steps) return null;
        return (
          <Container key={button.id} onClick={() => onNext()} style={{ display: activeMenu === button.menu ? "flex" : "none" }}>
            <a id={`${button.id}-next`}>
              <FaArrowRight />
            </a>
          </Container>
        )
      })}
    </>
  );
}

export default VergeNext;