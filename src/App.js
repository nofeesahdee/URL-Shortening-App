import './App.css';
import { v4 as uuidv4 } from 'uuid'
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
      id: 1,
      text:`https://frontendmentor-url-shortner.vercel.app/`,
      shortLink:`https://shrtco.de/W3xMGq`,
    }
  ])

  const addOutput = (newOutput) => {
    newOutput.id = uuidv4()
    setOutput([newOutput, ...output])
  }

  return (
    <ShortenProvider>
      <Header />
      <Hero />
      <Statistics handleAdd={addOutput} output={output}/>
      <Boost />
      <Footer />
    </ShortenProvider>
  );
}

export default App;
