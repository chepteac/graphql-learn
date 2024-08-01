import {gql, useMutation} from '@apollo/client';

export default function LyricList({lyrics}) {
  const [likeLyric] = useMutation(gql`
    mutation LikeLyric($id: ID) {
      likeLyric(id: $id) {
        id
        likes
      }
    }
  `);

  const likeHandler = id => {
    likeLyric(id);
  };

  return (
    <ul className="collection">
      {lyrics.map(({id, content, likes}) => (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => likeHandler(id)}>
            thumb_up
          </i>
          {likes}
        </li>
      ))}
    </ul>
  );
}
