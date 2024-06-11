import {createBrowserRouter} from 'react-router-dom';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import App from './App';
import SongList from '../components/SongList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SongList />,
      },
    ],
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
