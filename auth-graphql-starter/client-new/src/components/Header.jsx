import {useMutation, useQuery} from '@apollo/client';
import query from '../queries/current-user';
import {Link} from 'react-router-dom';
import logoutMutation from '../mutations/logout';

export default function Header() {
  const {data, loading} = useQuery(query);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        {
          <ul className="right">
            <Buttons loading={loading} user={data?.user} />
          </ul>
        }
      </div>
    </nav>
  );
}

function Buttons({loading, user}) {
  const [logout] = useMutation(logoutMutation);

  if (loading) return <div />;
  if (user)
    return (
      <li>
        <a
          onClick={() => {
            logout({refetchQueries: [{query}]});
          }}
        >
          Logout
        </a>
      </li>
    );
  return (
    <div>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </div>
  );
}
