import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  overflow: auto;
`;

export const LoadContainer = styled.div`
  background-color: #fff;
  margin: 50px;
  padding: 20px;
  border-radius: 10px;
`

export const CartButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
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

export const ArticlesNumber = styled.div`
  font-size: 14px;
`;
