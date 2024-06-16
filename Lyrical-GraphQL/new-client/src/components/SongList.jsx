import {gql, useApolloClient, useMutation, useQuery} from '@apollo/client';
import {Link} from 'react-router-dom';
import {fetchSongs} from '../queries/fetchSongs';

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      title
    }
  }
`;

export default function SongList() {
  const client = useApolloClient();
  const {data, loading} = useQuery(fetchSongs);
  const [deleteSong] = useMutation(mutation);

  if (loading) {
    return <div>Loading...</div>;
  }

  const deleteSongHandler = id => {
    deleteSong({variables: {id}}).then(() =>
      client.refetchQueries({include: 'active'})
    );
  };

  return (
    <div>
      <ul className="collection">
        {data.songs.map(({id, title}) => (
          <li key={id} className="collection-item">
            {title}
            <i className="material-icons" onClick={() => deleteSongHandler(id)}>
              delete
            </i>
          </li>
        ))}
      </ul>
      <Link to="songs/new" className="btn-floating btn-large red right">
        +
      </Link>
    </div>
  );
}
