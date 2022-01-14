import styled from 'styled-components';


export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 888;
  background: rgb(0,0,0, .7);


  svg{
    width: 80%;
    height: 70px;
  }

  @media only screen and (orientation:landscape) {
    display: none;
  }
 
  @media only screen and (min-width: 480px) and (orientation:portrait) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
  
  }
`;

