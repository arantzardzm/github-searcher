import axios from 'axios';
import _ from 'lodash';
import {
  GET_USER_SELECT_INPUT,
  GET_USER_SEARCH_INPUT,
  GET_USER_POSTS,
  GET_USER_POSTS_LOADING,
  GET_USER_POSTS_ERROR,
  CLEAR_USER_POSTS,
} from './types';

export const getUserSelectInput = (selectInput: string) => ({
  type: GET_USER_SELECT_INPUT,
  selectInput,
});

export const getUserSearchInput = (searchInput: string) => ({
  type: GET_USER_SEARCH_INPUT,
  searchInput,
});

export const getUserPosts = (
  selectInput: string,
  searchInput: string,
) => async (dispatch: any) => {
  dispatch({
    type: GET_USER_POSTS_LOADING,
  });
  try {
    const data = await axios.post('http://localhost:2900/api/search', {
      selectInput: selectInput === 'Users' ? 'users' : 'repositories',
      searchInput,
    });
    if (data.data.status === 200) {
      dispatch({
        type: GET_USER_POSTS,
        posts: data.data.data,
        message: _.isEmpty(data.data.data.items)
          ? 'No records were found. Please try a different search!'
          : '',
      });
    } else {
      dispatch({
        type: GET_USER_POSTS_ERROR,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_USER_POSTS_ERROR,
    });
  }
};

export const clearUserPosts = () => ({
  type: CLEAR_USER_POSTS,
});
