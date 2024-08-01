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

  const likeHandler = (id, likes) => {
    likeLyric({
      variables: {id},
      optimisticResponse: {
        likeLyric: {
          id,
          likes: likes + 1,
          __typename: 'LyricType',
        },
      },
    });
  };

  return (
    <ul className="collection">
      {lyrics.map(({id, content, likes}) => (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => likeHandler(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  );
}
