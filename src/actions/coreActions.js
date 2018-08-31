import * as types from './actionTypes';

export function updateLanguage(lang) {
  return { type: types.UPDATE_LANGUAGE, payload: lang }
}
