import {createBrowserRouter} from 'react-router-dom';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import App from './App';
import LoginForm from './components/LoginForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{path: 'login', element: <LoginForm />}],
  },
  {
    path: '/graphql',
    element: (
      /*This GraphiQL interface does not automatically set cookies, 
        so please use the old GraphiQL interface for testing and debugging.*/
      <GraphiQL
        fetcher={createGraphiQLFetcher({url: 'http://localhost:4000/graphql'})}
      />
    ),
  },
]);
