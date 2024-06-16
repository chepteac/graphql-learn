import {useQuery} from '@apollo/client';
import fetchSong from '../queries/fetchSong';
import {useParams} from 'react-router-dom';

export default function SongDetail() {
  const {id} = useParams();
  const {data} = useQuery(fetchSong, {variables: {id}});

  console.log('data:', data);

  return (
    <div>
      <h3>Song Detail</h3>
    </div>
  );
}
