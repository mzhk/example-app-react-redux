import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movieActions';
import connect from 'react-redux/es/connect/connect';

class MovieCreatorWithStore extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.movieInput = React.createRef();
  }

  handleClick() {
    console.log('handle click: ' + this.movieInput.current.value);
    this.props.movieActions.addMovie(this.movieInput.current.value);
    this.movieInput.current.value = '';
  }

  render() {
    return (
      <div>
        <input ref={this.movieInput} />
        <button onClick={this.handleClick}>Add Movie</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(MovieCreatorWithStore)
