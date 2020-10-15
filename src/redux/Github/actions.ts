import axios from 'axios';
import { GET_POSTS } from './types';

export const getPosts = () => async (dispatch: any) => {
  try {
    const data = await axios.get('https://api.github.com/search/users?q=sam&page=1&per_page=100');
    dispatch({
      type: GET_POSTS,
      posts: data.data,
    });
  } catch (e) {
    // todo handle fail
  }
};
