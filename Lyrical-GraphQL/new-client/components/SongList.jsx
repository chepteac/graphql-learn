import {gql} from '@apollo/client';

//TODO: make sure to install these extensions in your vscode: GraphQL.vscode-graphql and GraphQL.vscode-graphql-syntax
const query = gql`
  {
    songs {
      title
    }
  }
`;

export default function SongList() {
  return <div>SongList</div>;
}
