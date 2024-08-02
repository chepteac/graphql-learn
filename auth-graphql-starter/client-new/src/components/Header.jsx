import {useQuery} from '@apollo/client';
import query from '../queries/current-user';

export default function Header() {
  const {data, loading} = useQuery(query);

  const renderButtons = () => {
    if (loading) {
      return <div />;
    }

    if (data.user) {
      return <div>Logout</div>;
    } else {
      return <div>You are not signed in.</div>;
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">{renderButtons()}</div>
    </nav>
  );
}
