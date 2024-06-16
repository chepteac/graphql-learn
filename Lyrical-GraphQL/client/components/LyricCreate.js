import React, {Component} from 'react';

class LyricCreate extends Component {
  render() {
    return (
      <form>
        <label htmlFor="add-lyric">Add a Lyric</label>
        <input id="add-lyric" />
      </form>
    );
  }
}

export default LyricCreate;
