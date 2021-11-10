import React from 'react';
// eslint-disable-next-line import/named
import { ContextProvider } from './Context';
import Header from './Components/Header';
import Homepage from './Components/Homepage';

function App() {
  return (
    <ContextProvider>
      <Header />
      <Homepage />
    </ContextProvider>
  );
}

export default App;
