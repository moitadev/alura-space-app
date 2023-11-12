import styled from 'styled-components';
import Title from '../../Title';
import trendings from './fotos-populares.json';

const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrendingList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 23px;
`;

const TrendingItem = styled.li`
  padding: 0;
  img {
    border-radius: 20px;
  }
`;

const Trending = () => {
  return (
    <TrendingWrapper>
      <Title align="center">Populares</Title>
      <TrendingList>
        {trendings.map((trending) => (
          <TrendingItem key={trending.id}>
            <img src={trending.path} alt={trending.alt} />
          </TrendingItem>
        ))}
      </TrendingList>
    </TrendingWrapper>
  );
};

export default Trending;
