import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: rgb(0,0,0);

  #preloader_percentaje {
    font-size: 16px
  }

  @media only screen and (min-width: 480px) {
    #preloader_percentaje {
      font-size: 20px
    }
  }
  @media only screen and (min-width: 1024px) {
    #preloader_percentaje {
      font-size: 25px
    }
  }
`;

export const Icon = styled.div`
  svg {
    fill: white;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }

  @media only screen and (min-width: 480px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (min-width: 1024px) {
    svg {
      width: 50px;
      height: 50px;
    }
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }

`;
