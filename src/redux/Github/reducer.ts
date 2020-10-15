import {
  GET_USER_SELECT_INPUT,
  GET_USER_SEARCH_INPUT,
  GET_POSTS,
  CLEAR_POSTS,
} from './types';

const INITIAL_STATE = {
  selectInput: 'Users',
  searchInput: '',
  posts: [],
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_USER_SELECT_INPUT:
      return {
        ...state,
        selectInput: action.selectInput,
      };
    case GET_USER_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInput,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};

export default reducer;
