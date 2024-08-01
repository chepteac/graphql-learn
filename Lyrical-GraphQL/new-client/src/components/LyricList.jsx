export default function LyricList({lyrics}) {
  const likeHandler = id => {
    console.log(id);
  };

  return (
    <ul className="collection">
      {lyrics.map(({id, content}) => (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => likeHandler(id)}>
            thumb_up
          </i>
        </li>
      ))}
    </ul>
  );
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
