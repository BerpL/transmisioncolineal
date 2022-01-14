import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const PoweredBy = styled.img`
  position: absolute;
  bottom: 0px;
  background-color: rgba(2, 169, 233, 0.2);
  right: 0px;
  padding: 2.5px;
  height: 25px;
`;

export const Controls = styled.div`
  position: absolute;  
  background-color: rgba(2, 169, 233, 0.2);
  bottom: 7%;
  right: 7%;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  display:flex;
  justify-content: center;
  align-items: center;  
`;

export const RightArrow = styled.img`
  width: 50px;  
  margin: 1rem;
  cursor: pointer;
`;

export const LeftArrow = styled.img`
  width: 50px; 
  margin: 1rem;
  cursor: pointer;
`;

export const TopArrow = styled.img`
  height: 50px;  
  position: absolute;
  margin-bottom: 5rem;
  cursor: pointer;
`;

export const BotArrow = styled.img`
  height: 50px;  
  position: absolute;
  margin-top: 5rem;
  cursor: pointer;
`;