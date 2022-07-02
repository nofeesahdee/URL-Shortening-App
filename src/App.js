import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Boost from './pages/Boost';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Statistics from './pages/Statistics';
import { useState } from 'react';

function App() {
  const[output, setOutput] = useState([])

  // function storeUrl(url) {
  //   const toStorage = sessionStorage.getItem("urls")
  //     ? JSON.parse(sessionStorage.getItem("urls"))
  //     : [];
  //   toStorage.push(url);
  //   sessionStorage.setItem("urls", JSON.stringify(toStorage));
  // }

  const addOutput = (newOutput) => {
    newOutput.id = uuidv4()
    const toStore = setOutput([newOutput, ...output])
    sessionStorage.setItem(output.id , toStore);
  }

  return (
    <>
      <Header />
      <Hero />
      <Statistics handleAdd={addOutput} output={output}/>
      <Boost />
      <Footer />
    </>
  );
}

export default App;
