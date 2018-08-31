import React, { Component } from 'react';
import MovieCreator from '../components/movie-creator';
import MovieList from '../components/movie-list';

class MovieExplorer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  addMovie(movie) {
    this.setState({
      movies: this.state.movies.concat([movie])
    })
  }

  render() {
    return (
      <div>
        <MovieCreator onClick={movie => this.addMovie(movie)} />
        <MovieList items={this.state.movies} />
      </div>
    )
  }
}

export default MovieExplorer;