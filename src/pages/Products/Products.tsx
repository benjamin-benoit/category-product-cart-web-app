import { useQuery } from '@tanstack/react-query';
import api from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import * as S from './layout';

const Products = () => {
  const { data, isLoading } = useQuery(['getProducts'], async () => {
    return await api.getProducts();
  });

  return isLoading ? null : (
    <S.Container>
      {data &&
        data.map(product => (
          <ProductCard
            key={product.id}
            label={product.label}
            description={product.description}
            thumbnail_url={product.thumbnail_url}
          />
        ))}
    </S.Container>
  );
};

export default Products;
