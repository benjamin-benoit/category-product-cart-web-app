import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  min-height: 190px;
  margin: 10px;
  border-radius: 5px;
`;

export const ProductImageContainer = styled.div`
  margin: 10px 0;
  border-right: 1px solid #bcbcbc;
  margin: auto;
`;

export const ProductImage = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Label = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Description = styled.div``;

export const CartButton = styled.button`
display: flex;
color: #fff;
  align-items: center;
  position: absolute;
  background-color: #67b297;
  border: none;
  height: 30px;
  width: 150px;
  margin: 20px;
  bottom: 0;
  right: 0;
  border-radius: 5px;
  cursor: pointer;
`;

export const CartLogo = styled.div`
    border-right: 1px solid #fff;
    margin-right: 5px;
    padding-right: 5px;
`