import './App.css';
import Boost from './pages/Boost';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Statistics from './pages/Statistics';
import { ShortenProvider } from './context/shortenContext';

function App() {
  return (
    <ShortenProvider>
      <Header />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </ShortenProvider>
  );
}

export default App;
