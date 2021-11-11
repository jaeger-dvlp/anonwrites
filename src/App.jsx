import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line import/named
import { ContextProvider } from './Context';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import AddWriteButton from './Components/AddWriteButton';
import CategoryWrite from './Components/CategoryWrite';
import NotFound from './Components/NotFound';

AOS.init();
function App() {
  return (
    <ContextProvider>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/category/:name" component={CategoryWrite} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <AddWriteButton />
    </ContextProvider>
  );
}

export default App;
