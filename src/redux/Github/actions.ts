import axios from 'axios';
import {
  GET_USER_SELECT_INPUT,
  GET_USER_SEARCH_INPUT,
  GET_POSTS,
  CLEAR_POSTS,
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
  try {
    const type = selectInput === 'Users' ? 'users' : 'repositories';
    const data = await axios.get(
      `https://api.github.com/search/${type}?q=${searchInput}&page=1&per_page=100`,
    );
    dispatch({
      type: GET_POSTS,
      posts: data.data,
    });
  } catch (e) {
    // todo handle fail
  }
};

export const clearUserPosts = () => ({
  type: CLEAR_POSTS,
});
