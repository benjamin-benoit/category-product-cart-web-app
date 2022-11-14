import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  min-height: 75px;
  margin: 10px;
  border-radius: 5px;
`;

export const ProductImageContainer = styled.div`
  margin: 10px 0;
  border-right: 1px solid #bcbcbc;
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
