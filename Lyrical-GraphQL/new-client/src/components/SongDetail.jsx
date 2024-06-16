import {useQuery} from '@apollo/client';
import fetchSong from '../queries/fetchSong';
import {Link, useParams} from 'react-router-dom';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

export default function SongDetail() {
  const {id} = useParams();
  const {data} = useQuery(fetchSong, {variables: {id}});

  const song = data?.song;

  if (!song) return <div></div>;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
}
