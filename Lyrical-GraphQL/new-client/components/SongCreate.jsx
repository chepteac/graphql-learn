import {useId, useState} from 'react';
import {gql} from '@apollo/client';

export default function SongCreate() {
  const [title, setTitle] = useState('');
  const id = useId();
  const inputId = `song-title-input-${id}`;

  const handleSubmit = event => {
    event.preventDefault();
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

const mutation = gql`
  mutation {
    addSong(title:) {
      
    }
  }
`;
