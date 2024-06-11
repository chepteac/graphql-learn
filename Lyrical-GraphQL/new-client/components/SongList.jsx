import {gql, useQuery} from '@apollo/client';

//TODO: make sure to install these extensions in your vscode: GraphQL.vscode-graphql and GraphQL.vscode-graphql-syntax
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default function SongList() {
  const {data, loading} = useQuery(query);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="collection">
      {data.songs.map(song => (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      ))}
    </ul>
  );
}
