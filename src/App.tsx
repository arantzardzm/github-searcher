import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Search, NotFound } from './pages';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
