import {createBrowserRouter} from 'react-router-dom';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import App from './App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: 'login', element: <LoginForm />},
      {path: 'signup', element: <SignupForm />},
      {path: 'dashboard', element: requireAuth(Dashboard)},
    ],
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
