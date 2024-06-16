import {useQuery} from '@apollo/client';
import fetchSong from '../queries/fetchSong';
import {useParams} from 'react-router-dom';

export default function SongDetail() {
  const {id} = useParams();
  const {data} = useQuery(fetchSong, {variables: {id}});

  const song = data?.song;

  if (!song) return <div></div>;

  return (
    <div>
      <h3>{song.title}</h3>
    </div>
  );
}
