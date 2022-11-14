import * as S from './layout';
import defaultImage from './../../assets/no-image.png';

interface Props {
  label: string;
  description: string;
  thumbnail_url: string | null;
}

const ProductCard = ({ label, description, thumbnail_url }: Props) => {
  return (
    <S.Container>
      <S.ProductImageContainer>
        <S.ProductImage src={thumbnail_url ? thumbnail_url : defaultImage} alt={label} />
      </S.ProductImageContainer>
      <S.InformationContainer>
        <S.Label>{label}</S.Label>
        <S.Description>{description}</S.Description>
      </S.InformationContainer>
    </S.Container>
  );
};

export default ProductCard;
