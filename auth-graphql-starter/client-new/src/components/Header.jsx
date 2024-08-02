import {useQuery} from '@apollo/client';
import query from '../queries/current-user';
import {Link} from 'react-router-dom';

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
  if (loading) return <div />;
  if (user) return <div>Logout</div>;
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
