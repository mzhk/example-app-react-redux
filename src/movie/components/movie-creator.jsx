import React, {Component} from "react";

class MovieCreator extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			newMovie: ''
		}
	}

	handleChange(e) {
		this.setState({newMovie: e.target.value})
	}

	handleClick() {
		this.props.onClick(this.state.newMovie);
		this.setState({newMovie: ''})
	}

	render() {
		return (
			<div>
				<input value={this.state.newMovie} onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Add Movie</button>
			</div>
		)
	}
}

export default MovieCreator;