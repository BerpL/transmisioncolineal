import styled from 'styled-components';

export const Container = styled.div`
  z-index: 3;
  position: fixed;
  top: 50%;
  min-width: 40px;
  user-select: none;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  @media only screen and (min-width: 480px) {
    min-width: 50px;
  }
  @media only screen and (min-width: 1024px) {
    min-width: 60px;
  }
`;

export const Item = styled.div`
  z-index: 3;
  width: 40px;
  cursor: pointer;
  height: 40px;
  background: #000;
  border-bottom: 1px solid rgba(2, 169, 233, 0.3);
  border-right: 1px solid rgba(2, 169, 233, 0.3);
 
 a {
   display: block;
   width: 100%;
   display: flex;
  align-items: center;
  justify-content: center;
   height: 100%;
 }

  &:first-child{
    border-top: 1px solid rgba(2, 169, 233, 0.3);
  }

  svg {
    fill: rgb(2, 169, 233);
    width: 16px;
    height: 16px;
    opacity: 0.5;
  }

  &.active {
    border-right:  none;
    a{
      pointer-events: none;
    }
    svg {
      opacity: 1;
    }
  }

  &:hover svg, &:Active svg  {
      opacity: 1;
  }

  @media only screen and (min-width: 480px) {
    width: 50px;
    height: 50px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Menu = styled.div`
`

export const Content = styled.div`
  width: 180px;
  position: absolute;
  border-radius: 0px 5px 5px 0px;
  top: 18px;
  left: 40px;
  display: ${({ open }) => open ? "block" : "none"};
  background: #000;
  min-height: calc(40px * ${({ numberButtons }) => numberButtons});
  height: calc(50vh + 40px * ${({ numberButtons }) => numberButtons / 2} - 18px);
  border: 1px solid rgba(2, 169, 233, 0.3);
  border-left: none;
  overflow: auto;

  p {
    padding: 0px 12px 12px;
    color: #999999;
    font-size: 12px;
    line-height: 17px;
    margin:  0;
  }

  ul {
    padding: 0px 12px 12px;
    color: white;
    font-size: 12px;
    line-height: 17px;
    margin:  0;
    ul {
        padding: 0px 4px 4px;
      }
  }


  @media only screen and (min-width: 480px) {
    width: 235px;
    left: 50px;
    min-height: calc(50px * ${({ numberButtons }) => numberButtons});
    height: calc(50vh + 50px * ${({ numberButtons }) => numberButtons / 2} - 18px);
    p, ul {
      font-size: 13px;
      line-height: 18px;
      padding: 0px 16px 16px;
      ul {
        padding: 0px 8px 8px;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 270px;
    left: 60px;
    min-height: calc(60px * ${({ numberButtons }) => numberButtons});
    height: calc(50vh + 60px * ${({ numberButtons }) => numberButtons / 2} - 18px);
    p, ul {
      font-size: 15px;
      line-height: 20px;
      padding: 0px 24px 24px;
      ul {
        padding: 0px 12px 12px;
      }
    }
  }
`

export const Title = styled.span`
  color: rgb(2, 169, 233);
  padding: 0px 12px;
  margin:  0;
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 40px;


  @media only screen and (min-width: 480px) {
    height: 50px;
    font-size: 18px;
    padding: 0px 16px;
  }
  @media only screen and (min-width: 1024px) {
    height: 60px;
    font-size: 20px;
    padding: 0px 24px;
  }
`

export const Li = styled.li`
  color: #999999;
  line-height: 21px;
  display: flex;
  margin-left: 5px;


  ${({ canHover }) => canHover && `
  &:hover {
      color: #A39108;
      cursor: pointer;
    }
  `}
  

  &.section:hover {
    color: #999999;
    cursor: default;
  }

  &.section{
    margin-left: 0px;
    margin-bottom: 5px;
  }

  &.done {
    color: #A39108;
    pointer-events: none;
  }
  
  a{
    display: block
  }

  strong {
    color: rgb(2, 169, 233);
  }

  svg {
    margin-right: 5px;
    height: 21px;
  }
  

  @media only screen and (min-width: 480px) {
    line-height: 23px;
    svg {
      height: 23px;
    }
   
  }
  @media only screen and (min-width: 1024px) {
    line-height: 26px;
    svg {
      height: 26px;
    }
  }
`

export const ToggleIcon = styled.div`
  width: 18px;
  height: 18px;
  cursor:pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 12px;
    height: 12px;
  }
`


