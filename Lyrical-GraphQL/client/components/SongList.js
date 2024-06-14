import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import {fetchSongs} from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
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

export default graphql(fetchSongs)(SongList);
