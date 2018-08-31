import { combineReducers } from 'redux';
import core from './coreReducer';
import movie from './movieReducer';

const rootReducer = combineReducers({
  core,
  movie
});

export default rootReducer;
