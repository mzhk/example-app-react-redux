import initialState from "../store/initialState";
import * as types from '../actions/actionTypes';


export default function movie(state = initialState.movie, action) {
	switch (action.type) {
		case types.LOAD_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.payload
			};
		case types.ADD_MOVIE:
			return {
				...state,
				movies: state.movies.concat([action.payload])
				//TODO 20-Aug-2018/mariusz: do
			};
		default:
			return state;
	}
}