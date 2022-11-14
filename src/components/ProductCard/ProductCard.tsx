import * as S from './layout';
import defaultImage from './../../assets/no-image.png';
import { AiFillShopping } from 'react-icons/ai';

interface Props {
  label: string;
  description: string;
  thumbnail_url: string | null;
  price: number;
}

const ProductCard = ({ label, description, thumbnail_url, price }: Props) => {
  return (
    <S.Container>
      <S.ProductImageContainer>
        <S.ProductImage src={thumbnail_url ? thumbnail_url : defaultImage} alt={label} />
      </S.ProductImageContainer>
      <S.InformationContainer>
        <S.Label>{label}</S.Label>
        <S.Description>{description}</S.Description>
      </S.InformationContainer>
      <S.CartButton>
        <S.CartLogo>
          <AiFillShopping />
        </S.CartLogo>
        {price / 100 + ' €'}
      </S.CartButton>
    </S.Container>
  );
};

export default ProductCard;
