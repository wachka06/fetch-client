import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginUI from './components/login-page/index.jsx';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LoginUI} />
      </Switch>
    </Router>
  </div>
);

export default App;
