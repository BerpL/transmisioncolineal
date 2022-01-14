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
  max-height: calc(100vh - 105px);
  user-select: none;

  @media only screen and (min-width: 700px) {
    width: 257px;
    height: 324px;
  }
  @media only screen and (min-width: 1280px) {
    width: 392px;
    height: 458px;
  }
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

const Wrapper = styled.div`
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
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 12px;
    height: 12px;
  }
`;

export { Media, Wrapper, Container, Img, Close, ToggleIcon };