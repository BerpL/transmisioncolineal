import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ open }) => open ? "flex" : "none"};
  position: absolute;
  z-index: 20;
  overflow: hidden;
  width: 100%;
  background: rgba(0,0,0,0.5);
  height: 100vh;
`;


export const Wrapper = styled.div`
  
  position: relative;
  background: #141517;
  height: 100%;
  width: 100%;
  margin: auto;

  @media only screen and (min-width: 1024px) {
    width: 90%;
    max-width: 820px;
    height: 90%;
  }
`;

export const Title = styled.p`
  width: calc(100% - 45px);
  padding: 36px;
  font-size: 25px;
  color: rgb(2, 169, 233);
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: white;
  padding: 10px 0 20px;
  width: 100%;
  margin:0;
`;

export const Content = styled.div`
  height: calc(100% - 100px);
  overflow: auto;
  width: 100%;
  padding: 0  36px  36px;
  color: rgba(255,255,255,0.6);
  font-size: 10.5px;
  div {
    display: flex;
    align-items: flex-start;

    > img {
      max-width: 40%;
      flex-shrink: 0;
      height: auto;
    
    }
    >  p{
      
      padding: 0 24px;
      flex: 1;

      span  {
        display: block;
        margin-bottom: 10px; 
      }
    }
  }
  p{
    line-height: 22px;
    margin-bottom: 10px;  

  }
  ul{
    padding: 10px 24px;
    li{
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: none;
      }
  
    }
  }
  ${Title}  {
    padding: 10px 0 20px;
    width: 100%;
    margin:0;
  }

  @media only screen and (min-width: 480px) {
   
      font-size: 14px;

  }
`;



export const Icon = styled.div`
  position: absolute;
  z-index: 2;
  right: 10px;
  cursor: pointer;
  top: 10px;
  svg{
    width: 35px;
    fill: rgb(2, 169, 233);
    height: 35px
  }
`;