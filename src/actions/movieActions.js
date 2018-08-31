import * as types from './actionTypes';

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, payload: movies }
}

export function addMovie(movie) {
  return { type: types.ADD_MOVIE, payload: movie }
}