import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import movieReducer from './movieReducer';

export const rootReducer = combineReducers({
    movie: movieReducer,
    favorite: favoriteReducer,
  });
