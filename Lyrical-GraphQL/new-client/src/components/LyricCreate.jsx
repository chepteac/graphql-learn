import {useState} from 'react';
import {gql} from '@apollo/client';

export default function LyricCreate() {
  const [content, setContent] = useState('');

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="add-lyric">Add a Lyric</label>
      <input
        id="add-lyric"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
    </form>
  );
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;
