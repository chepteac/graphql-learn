import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import 'graphiql/graphiql.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './router.jsx';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);
