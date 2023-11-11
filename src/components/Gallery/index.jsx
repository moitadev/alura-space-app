import styled from 'styled-components';
import Title from '../Title';
import Tags from './Tags';
import Trending from './Trending';
import Image from './Image';

const ContainerGallery = styled.div`
  display: flex;
`;

const FluidSection = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
`;

const ImageList = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
  box-sizing: border-box;
`;

const Gallery = ({ photos = [], onPhotoSelected }) => {
  return (
    <>
      <Tags />
      <ContainerGallery>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImageList>
            {photos.map((photo) => (
              <Image
                onZoom={onPhotoSelected}
                key={photo.id}
                photo={photo}
              />
            ))}
          </ImageList>
        </FluidSection>
        <Trending />
      </ContainerGallery>
    </>
  );
};

export default Gallery;
