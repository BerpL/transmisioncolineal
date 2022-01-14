import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  user-select: none;
`;

export const Media = styled.div`
  font-size: 16px;
  text-align: center;
  color: rgb(163, 151, 144);
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;

  @media only screen and (min-width: 700px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

const IconCSS = css`
  cursor: pointer;
  flex: none;
  bottom: 0;
  svg{
    fill: rgb(2, 169, 233);
    height: 20px;
  }

  @media only screen and (min-width: 700px) {
    svg{
      height: 23px;
    }
  }
  @media only screen and (min-width: 1280px) {
    svg{
      height: 26px;
    }
  }
`

export const ToggleIconLeft = styled.div`
    ${IconCSS};
    left: 0;
    margin-left: 12px;
`;

export const ToggleIconRight = styled.div`
    ${IconCSS};
    right: 0;
    margin-right: 12px;
`;