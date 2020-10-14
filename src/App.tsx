import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/test">
            <div className="App">test</div>
          </Route>
          <Route path="/asdf">
            <div className="App">asdf</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
