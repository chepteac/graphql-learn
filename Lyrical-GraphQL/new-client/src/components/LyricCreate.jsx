import {useState} from 'react';
import {gql, useMutation} from '@apollo/client';
// import {useParams} from 'react-router-dom';

export default function LyricCreate({songId}) {
  /* As an alternative, you can get songId from the URL params:
     const {id: songId} = useParams(); */
  const [content, setContent] = useState('');
  const [addLyricToSong] = useMutation(mutation);

  const submitHandler = event => {
    event.preventDefault();

    addLyricToSong({
      variables: {
        songId,
        content,
      },
    });

    setContent('');
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
        likes
      }
    }
  }
`;
