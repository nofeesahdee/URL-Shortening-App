import './App.css';
import Boost from './pages/Boost';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Statistics from './pages/Statistics';
import { ShortenProvider } from './context/shortenContext';
import { useState } from 'react';

function App() {
  const[output, setOutput] = useState([
    {
      text:`https://frontendmentor-url-shortner.vercel.app/`,
      shortLink:`https://shrtco.de/W3xMGq`,
    }
  ])

  const addOutput = (newOutput) => {
    setOutput([newOutput, ...output])
    console.log(output)
}
  return (
    <ShortenProvider>
      <Header />
      <Hero />
      <Statistics handleAdd={addOutput}/>
      <Boost />
      <Footer />
    </ShortenProvider>
  );
}

export default App;
