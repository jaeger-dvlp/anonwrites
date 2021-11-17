import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AOS from 'aos';
import 'aos/dist/aos.css';
import faker from 'faker';
import { ContextProvider } from './Context';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import AddWriteButton from './Components/AddWriteButton';
import CategoryWrite from './Components/CategoryWrite';
import NewWrite from './Components/NewWrite';
import NotFound from './Components/NotFound';
import Popup from './Components/Popup';
import ScrollUpButton from './Components/ScrollUpButton';

const history = createBrowserHistory();

AOS.init();
function App() {
  return (
    <ContextProvider>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/new"
            render={() => <NewWrite key={faker.datatype.uuid()} />}
          />
          <Route
            path="/category/:name"
            render={(props) => (
              <CategoryWrite history={props} key={faker.datatype.uuid()} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <AddWriteButton />
        <ScrollUpButton />
      </Router>
      <Popup />
    </ContextProvider>
  );
}

export default App;
