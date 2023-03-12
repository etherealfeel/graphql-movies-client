import { Navigation } from './components';
import { CssBaseline, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, Settings, Recommend } from './pages';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="recommend" element={<Recommend />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
