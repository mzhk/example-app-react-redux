import React, { Component } from 'react';
import MovieCreatorWithStore from '../components/movie-creator-with-store';
import connect from 'react-redux/es/connect/connect';
import MovieList from '../components/movie-list';


class MovieExplorerWithStore extends Component {

  render() {
    return (
      <div>
        <MovieCreatorWithStore />
        <MovieList items={this.props.movieState.movies} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    movieState: state.movie
  };
}

export default connect(mapStateToProps)(MovieExplorerWithStore)
