import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import api from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import * as S from './layout';
import { AiFillShopping } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';

const Products = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const { data, isLoading } = useQuery(['getProducts'], async () => {
    return await api.getProducts();
  });

  return isLoading ? null : (
    <S.Container>
      {data &&
        data.map(product => (
          <ProductCard
            key={product.id}
            productId={product.id}
            label={product.label}
            description={product.description}
            thumbnail_url={product.thumbnail_url}
            price={product.price}
          />
        ))}
      <S.CartButton onClick={() => (cart.length > 0 ? navigate('/cart') : null)}>
        <AiFillShopping />
        <S.ArticlesNumber>
          {cart.reduce((total, { quantity }) => total + quantity, 0)} Articles
        </S.ArticlesNumber>
      </S.CartButton>
    </S.Container>
  );
};

export default Products;
