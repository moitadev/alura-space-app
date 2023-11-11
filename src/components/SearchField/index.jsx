import styled from 'styled-components';
import MagnifyingGlass from '../Icons/MagnifyingGlass';

const StyledInputWrapper = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  border: 2px solid #C98CF1;
`;

const StyledInput = styled.input`
  background: transparent;
  padding: 0;
  border: 0;
  width: 538px;
  color: #D9D9D9;
  font-size: 20px;
  &::placeholder{
    color: #D9D9D9;
  }
  &:focus{
    outline: 0;
  }
`;

const SearchField = () => {
  return (
  <StyledInputWrapper>
    <StyledInput type="text" placeholder="O que você procura?" />
    <MagnifyingGlass />
  </StyledInputWrapper>
  );
};

export default SearchField;
