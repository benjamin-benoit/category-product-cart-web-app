import { useQuery } from '@tanstack/react-query';
import api from '../../api/api';
import * as S from './layout';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../StyledButton/StyledButton';

const Header = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(['getCategories'], async () => {
    return await api.getCategories();
  });

  return isLoading ? null : (
    <S.Container>
      <StyledButton text="Tous" onClick={() => navigate('/')} />
      {data &&
        data.map(category => (
          <StyledButton
            key={category.id}
            text={category.label}
            onClick={() => navigate(`/${category.id}`)}
          />
        ))}
    </S.Container>
  );
};

export default Header;
