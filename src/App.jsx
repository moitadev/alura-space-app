import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';

const GradientBackground = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  img{
    max-width: 212px;
  }
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyle />
      <Header />
    </GradientBackground>
  );
}

export default App;
