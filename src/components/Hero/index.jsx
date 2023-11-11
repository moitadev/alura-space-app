import styled from 'styled-components';

const StyledHero = styled.div`
  max-width: 1156px;
  width: 100%;
  flex-shrink: 1;
  border-radius: 20px;
  background-image: ${(props) => 'url(' + props.$backgroundImage + ')'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledTitle = styled.h1`
  color: #fff;
  font-family: 'Gandhi Sans Regular';
  font-weight: 400;
  max-width: 300px;
  padding: 92px 64px;
  margin: 0;
  font-size: 40px;
  line-height: normal;
`;

const Hero = ({ text, backgroundImage }) => {
  return (
    <StyledHero $backgroundImage={backgroundImage}>
      <StyledTitle>{text}</StyledTitle>
    </StyledHero>
  );
};

export default Hero;
