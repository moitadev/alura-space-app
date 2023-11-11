import styled from 'styled-components';

const StyledCard = styled.figure`
  box-sizing: border-box;
  max-width: 100%;
  flex-basis: 48%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  color: #fff;
  border-radius: 20px;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 357.81px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const StyledCaption = styled.figcaption`
  margin-top: -5px;
  border-radius: 0px 0px 20px 20px;
  background: #001634;
  padding: 16px 22px;
  h3 {
    margin: 0;
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LikeButton = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
  background-image: url('/public/icones/favorito.png');
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
`;

const ExpandButton = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
  background-image: url('/public/icones/expandir.png');
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
`;

const Image = ({ photo, expanded = false, onZoom }) => {
  return (
    <StyledCard id={photo.id}>
      <StyledImage src={photo.path} alt={photo.titulo} />
      <StyledCaption>
        <h3>{photo.titulo}</h3>
        <StyledFooter>
          <p>{photo.fonte}</p>
          <ButtonsWrapper>
            <LikeButton value="like" />
            <ExpandButton onClick={() => onZoom(photo)} value="expand" />
          </ButtonsWrapper>
        </StyledFooter>
      </StyledCaption>
    </StyledCard>
  );
};

export default Image;
