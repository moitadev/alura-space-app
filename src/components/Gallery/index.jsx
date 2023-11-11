import styled from 'styled-components';
import Title from '../Title';
import Tags from './Tags';
import Trending from './Trending';

const ContainerGallery = styled.div`
    display: flex;
`

const FluidSection = styled.div`
    flex-grow: 1;
`

const Gallery = () => {
  return (
    <>
      <Tags />
      <ContainerGallery>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
        </FluidSection>
        <Trending />
      </ContainerGallery>
    </>
  );
};

export default Gallery;
