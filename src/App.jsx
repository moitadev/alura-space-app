import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Aside from './components/Aside';
import Hero from './components/Hero';
import backgroundImage from './assets/banner.png';
import Gallery from './components/Gallery';
import photos from './fotos.json'
import { useState } from 'react';

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
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  return (
    <GradientBackground>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContainer>
          <Aside />
          <GalleryContent>
            <Hero
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={backgroundImage}
            />
            <Gallery photos={galleryPhotos} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;
