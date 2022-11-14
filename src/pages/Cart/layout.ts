import styled from 'styled-components';

export const BackButton = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

export const Container = styled.div`
  background-color: #fff;
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  padding: 20px;
`;

export const Title = styled.h2`
  border-bottom: 1px dotted black;
`;

export const ProductColumn = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const ProductLabel = styled.div`
  font-weight: 600;
`;

export const RightInformations = styled.div`
  display: flex;
`;

export const ProductQuantity = styled.div`
  font-style: italic;
`;

export const ProductPrice = styled.div`
  width: 150px;
  text-align: right;
  padding-left: 20px;
`;

export const CartResult = styled.div`
  background-color: #fff;
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  padding: 20px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalLabel = styled.div`
  text-decoration: underline;
`;

export const TotalAmount = styled.div`
  font-weight: 600;
`;

export const CartValidation = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  font-size: 18px;
  background-color: #67b297;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #509b80;
  }
`;
