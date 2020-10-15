import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import githubReducer from './Github/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  github: githubReducer,
});

export default rootReducer;
