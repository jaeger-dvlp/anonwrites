import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line import/named
import { ContextProvider } from './Context';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import AddWriteButton from './Components/AddWriteButton';

AOS.init();
function App() {
  return (
    <ContextProvider>
      <Header />
      <Homepage />
      <AddWriteButton />
    </ContextProvider>
  );
}

export default App;
