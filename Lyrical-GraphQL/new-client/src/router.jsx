import {createBrowserRouter} from 'react-router-dom';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import App from './App';

export const router = createBrowserRouter([
  {
    index: true,
    element: App,
  },
  {
    path: '/graphql',
    element: (
      <GraphiQL
        fetcher={createGraphiQLFetcher({url: 'http://localhost:4000/graphql'})}
      />
    ),
  },
]);
