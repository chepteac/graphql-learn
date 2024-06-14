import {useId, useState} from 'react';
import {gql, useMutation} from '@apollo/client';
import {Link, useNavigate} from 'react-router-dom';

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default function SongCreate() {
  const [title, setTitle] = useState('');
  const [addSong] = useMutation(mutation);
  const navigate = useNavigate();
  const id = useId();
  const inputId = `song-title-input-${id}`;

  const handleSubmit = event => {
    event.preventDefault();
    addSong({variables: {title}}).then(() => navigate('/'));
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputId}>Song Title:</label>
        <input
          id={inputId}
          onChange={event => setTitle(event.target.value)}
          value={title}
        />
      </form>
    </div>
  );
}
