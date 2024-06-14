import {useId, useState} from 'react';
import {gql, useMutation} from '@apollo/client';

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
  const id = useId();
  const inputId = `song-title-input-${id}`;

  const handleSubmit = event => {
    event.preventDefault();
    addSong({variables: {title}});
  };

  return (
    <div>
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
