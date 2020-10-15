import {
  GET_USER_SELECT_INPUT,
  GET_USER_SEARCH_INPUT,
  GET_USER_POSTS,
  GET_USER_POSTS_LOADING,
  GET_USER_POSTS_ERROR,
  CLEAR_USER_POSTS,
} from './types';

const INITIAL_STATE = {
  selectInput: 'Users',
  searchInput: '',
  posts: [],
  status: 'success',
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
    case GET_USER_POSTS:
      return {
        ...state,
        posts: action.posts,
        status: 'success',
      };
    case GET_USER_POSTS_LOADING:
      return {
        ...state,
        status: 'loading',
      };
    case GET_USER_POSTS_ERROR:
      return {
        ...state,
        posts: [],
        status: 'error',
      };
    case CLEAR_USER_POSTS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};

export default reducer;
