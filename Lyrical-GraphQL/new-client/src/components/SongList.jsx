import {gql, useMutation, useQuery} from '@apollo/client';
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
  const {data, loading} = useQuery(fetchSongs);
  const [deleteSong] = useMutation(mutation);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="collection">
        {data.songs.map(song => (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        ))}
      </ul>
      <Link to="songs/new" className="btn-floating btn-large red right">
        +
      </Link>
    </div>
  );
}
