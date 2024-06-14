import React, {Component} from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {title: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="song-title-input">Song Title:</label>
          <input
            id="song-title-input"
            onChange={event => this.setState({title: event.target.value})}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
mutation {
  addSong(title: ) {
}
`;

export default SongCreate;
