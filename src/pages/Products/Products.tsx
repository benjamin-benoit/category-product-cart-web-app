import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import api from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import * as S from './layout';
import { AiFillShopping } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { Product } from '../../api/types';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>();
  const { cart } = useSelector((state: RootState) => state.cart);
  const { data, error, isLoading } = useQuery(['getProducts'], async () => {
    return await api.getProducts();
  });
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId && data) {
      setProducts(data.filter(product => categoryId === product.category_id));
    } else {
      setProducts(data);
    }
  }, [categoryId, data]);

  if (error) {
    // catcher l'erreur vers une app de monitoring ou autre
    // créer un affichage
  }

  return (
    <S.Container>
      <Header />
      {isLoading ? (
        <S.LoadContainer>Chargement des produits en cours...</S.LoadContainer>
      ) : (
        products &&
        products.map(product => (
          <ProductCard
            key={product.id}
            productId={product.id}
            label={product.label}
            description={product.description}
            thumbnail_url={product.thumbnail_url}
            price={product.price}
            categoryId={product.category_id}
          />
        ))
      )}
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
