import { combineReducers } from 'redux';
import githubReducer from './Github/reducer';

const rootReducer = combineReducers({
  github: githubReducer,
});

export default rootReducer;
