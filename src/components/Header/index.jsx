import styled from 'styled-components';
import TextField from '../SearchField';

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="/imagens/logo.png" alt="Space App" />
      <TextField />
    </StyledHeader>
  );
};

export default Header;
