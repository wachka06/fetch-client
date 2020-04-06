import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginUI from './components/login-page/index.jsx';
import LikedPets from './components/likedPets/index';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LoginUI} />
        <Route exact path="/likedPets" component={LikedPets} />
      </Switch>
    </Router>
  </div>
);

export default App;
