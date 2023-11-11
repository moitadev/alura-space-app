import styled from 'styled-components';
import tags from './tags.json';

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0px 10px;
  h3 {
    color: #d9d9d9;
    font-size: 24px;
    font-weight: 400;
    padding-right: 47px;
    margin: 0;
  }
`;

const StyledButton = styled.button`
  padding: 10px 8px;
  font-size: 24px;
  border-radius: 10px;
  border: 2px solid transparent;
  background: rgba(217, 217, 217, 0.3);
  transition: all 0.3s ease;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &:focus,
  &:hover {
    border: 2px solid #c98cf1;
    transition: all 0.3s ease;
  }
`;

const Tags = () => {
  return (
    <>
      <TagsWrapper>
        <h3>Busque por tags:</h3>
        {tags.map((tag) => (
          <StyledButton key={tag.id}>{tag.titulo}</StyledButton>
        ))}
      </TagsWrapper>
    </>
  );
};

export default Tags;
