import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8fd6bd;
  height: 100vh;
  width: 100%;
  margin: auto;
  overflow: auto;
`;

export const CartButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 25px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  font-size: 30px;
  background-color: #67b297;
  color: #fff;
  border-color: #f4f4f4;
  cursor: pointer;
  &:hover {
    background-color: #509b80;
  }
`;
