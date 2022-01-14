import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  border-radius: 6px 0 0 6px;
  background: rgb(28, 23, 22);
  width: 177px;
  display: ${({ open }) => open ? "block" : "none"};
  position: relative;
  padding: 6px 6px 50px 6px;
  height: 243px;

  @media only screen and (min-width: 700px) {
    width: 257px;
    height: 324px;
  }
  @media only screen and (min-width: 1280px) {
    width: 392px;
    height: 458px;
  }
`;

const Box = styled.div`
  top: 24px;
  width: 245px;
  height: 187px;
  box-shadow: 0 0 150px rgba(0,0,0,0.9) inset;
  z-index: 2;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 255);
`;

const Media = styled.div`
  height: 50px;
  position: absolute;
  width: 100%;
  bottom: 0%;
  justify-content: center;
`;

const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  right: 0px;
  bottom: 30px;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
`;

const Close = styled.div`
  position: relative;
  left: calc(100% - 35px);
  width: 35px;
  height: 22px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  fill: rgb(53,35,30);
`;

const ToggleIcon = styled.div`
  width: 18px;
  height: 18px;
  cursor:pointer;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 12px;
    height: 12px;
  };
`;

export { Box, Media, Overlay, Container, Img, Close, ToggleIcon };