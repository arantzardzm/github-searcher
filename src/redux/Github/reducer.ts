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
  message: '',
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_USER_SELECT_INPUT:
      return {
        ...state,
        selectInput: action.selectInput,
        message: '',
      };
    case GET_USER_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInput,
        message: '',
      };
    case GET_USER_POSTS:
      return {
        ...state,
        posts: action.posts,
        status: 'success',
        message: action.message,
      };
    case GET_USER_POSTS_LOADING:
      return {
        ...state,
        status: 'loading',
        message: '',
      };
    case GET_USER_POSTS_ERROR:
      return {
        ...state,
        posts: [],
        status: 'error',
        message: 'An error has occurred. Please try again later.',
      };
    case CLEAR_USER_POSTS:
      return {
        ...state,
        posts: [],
        message: '',
      };
    default:
      return state;
  }
};

export default reducer;
