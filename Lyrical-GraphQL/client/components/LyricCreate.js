import React, {Component} from 'react';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super();
    this.state = {content: ''};
  }

  submitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <label htmlFor="add-lyric">Add a Lyric</label>
        <input
          id="add-lyric"
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})}
        />
      </form>
    );
  }
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

export default LyricCreate;
