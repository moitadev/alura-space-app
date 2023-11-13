import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Aside from './components/Aside';
import Hero from './components/Hero';
import backgroundImage from './assets/banner.png';
import Gallery from './components/Gallery';
import photos from './fotos.json';
import { useEffect, useState } from 'react';
import ZoomModal from './components/ZoomModal';

const GradientBackground = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('');
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const onFavoriteToggle = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }

    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };


  return (
    <GradientBackground>
      <GlobalStyle />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <Aside />
          <GalleryContent>
            <Hero
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={backgroundImage}
            />
            <Gallery
              photos={galleryPhotos}
              onPhotoSelected={(photo) => setSelectedPhoto(photo)}
              onFavoriteToggle={onFavoriteToggle}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        photo={selectedPhoto}
        onClosed={() => setSelectedPhoto(null)}
        onFavoriteToggle={onFavoriteToggle}
      />
    </GradientBackground>
  );
};

export default App;
