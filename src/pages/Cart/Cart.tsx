import * as S from './layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { totalAmount } from './utils';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart]);

  return (
    <>
      <S.Container>
        <S.BackButton onClick={() => navigate('/')}>
          <IoMdArrowBack />
          Revenir aux produits
        </S.BackButton>
        <S.Title>Panier:</S.Title>
        {cart.map(item => (
          <S.ProductColumn key={item.id}>
            <S.ProductLabel>{item.label}</S.ProductLabel>
            <S.RightInformations>
              <S.ProductQuantity>Quantité: {item.quantity}</S.ProductQuantity>
              <S.ProductPrice>{(item.price * item.quantity) / 100} €</S.ProductPrice>
            </S.RightInformations>
          </S.ProductColumn>
        ))}
      </S.Container>
      <S.CartResult>
        <S.Total>
          <S.TotalLabel>Total :</S.TotalLabel>
          <S.TotalAmount>{totalAmount(cart) / 100} €</S.TotalAmount>
        </S.Total>
        <S.CartValidation>Valider le panier</S.CartValidation>
      </S.CartResult>
    </>
  );
};

export default Cart;
