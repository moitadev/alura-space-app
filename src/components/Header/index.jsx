import styled from 'styled-components';
import SearchField from '../SearchField';

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    max-width: 212px;
  }
`;

const Header = ({ filter, setFilter }) => {
  return (
    <StyledHeader>
      <img src="/imagens/logo.png" alt="Space App" />
      <SearchField filter={filter} setFilter={setFilter}  />
    </StyledHeader>
  );
};

export default Header;
