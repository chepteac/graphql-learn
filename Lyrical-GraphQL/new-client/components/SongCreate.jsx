import {useId, useState} from 'react';

export default function SongCreate() {
  const [title, setTitle] = useState('');
  const id = useId();
  const inputId = `song-title-input-${id}`;

  return (
    <div>
      <h3>Create a New Song</h3>
      <form>
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
