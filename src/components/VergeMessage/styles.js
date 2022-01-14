import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  background: rgba(0,0,0,0.8);
  top: 50%;
  color: white;
  font-size: 12px;
  padding: 15px 20px;
  width: 100%;
  max-width: 590px;
  transform: translate(-50%, -50%);
  z-index: 10;

  p{
    opacity: 0.7;
    margin-bottom: 10px;
    vertical-align: middle;
    line-height: 16px;
    svg{
      margin: 0px 5px
    }
  }

  @media only screen and (min-width: 480px) {
    padding: 20px;
  }

  @media only screen and (min-width: 1280px) {
    width: 90%;
    font-size: 14px;
    max-width: 590px;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  margin-bottom: 20px;

  @media only screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
