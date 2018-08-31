import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';


export default function core(state = initialState.core, action) {
  switch (action.type) {
    case types.UPDATE_LANGUAGE:
      return {
        ...state,
        lang: action.payload
      };
    default:
      return state;
  }
}