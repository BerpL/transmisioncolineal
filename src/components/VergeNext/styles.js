import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0px;
  background: #000;
  color: white;
  width: 40px;
  user-select: none;
  cursor: pointer;
  height: 40px;    
  border: 1px solid rgba(2, 169, 233, 0.3);

  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    text-align: center;
  }
  @media only screen and (min-width: 480px) {
    width: 50px;
    height: 50px; 
    svg{
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 60px;
    height: 60px; 
    svg  {
      width: 24px;
      height: 24px;
    }
  }

  svg{
    fill: rgb(2, 169, 233);
    opacity: 0.5;
    width: 16px;
    height: 16px;
  }

  &:hover svg, &:Active svg  {
      opacity: 1;
  }

`;
