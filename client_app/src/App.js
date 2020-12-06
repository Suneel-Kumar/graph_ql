import React from 'react';
// import logo from './logo.svg';
import './App.css';
import client from "./config/gql_config";
import { ApolloProvider } from '@apollo/client';
import Books from './books'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>My first Apollo app 🚀</h2>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;