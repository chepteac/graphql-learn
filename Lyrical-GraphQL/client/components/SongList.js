import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router';
import {fetchSongs} from '../queries/fetchSongs';

class SongList extends Component {
  deleteSongHandler(id) {
    this.props.mutate({variables: {id}}).then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({id, title}) => (
      <li key={id} className="collection-item">
        {title}
        <i
          className="material-icons"
          onClick={() => this.deleteSongHandler(id)}
        >
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="songs/new" className="btn-floating btn-large red right">
          +
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      title
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongList));
