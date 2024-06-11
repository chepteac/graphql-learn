import {gql, useQuery} from '@apollo/client';

//TODO: make sure to install these extensions in your vscode: GraphQL.vscode-graphql and GraphQL.vscode-graphql-syntax
const query = gql`
  {
    songs {
      title
    }
  }
`;

export default function SongList() {
  const {data} = useQuery(query);
  console.log('data:', data);

  return <div>SongList</div>;
}
