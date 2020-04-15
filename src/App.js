import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginUI from './components/login-page/index.jsx';
import LikedPetsPage from './components/liked-pets-page';
import AuthenticatedRoute from './components/common-components/authenticatedRoute/authenticatedRoute';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import LikedPets from './components/likedPets';

const apiUri =
  window.location.hostname === `localhost`
    ? `http://localhost:4000/`
    : `https://fetch-server-staging.herokuapp.com/`;
const httpLink = createHttpLink({
  uri: apiUri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginUI} />
          <AuthenticatedRoute path="/likedPets" component={LikedPetsPage} />
        </Switch>
      </Router>
    </div>
  </ApolloProvider>
);

export default App;
