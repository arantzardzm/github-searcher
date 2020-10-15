import {GET_POSTS} from './types'
// import axios from 'axios'

export const getPosts = () => {
  console.log("here");
  // const test = axios.get('https://www.techiediaries.com/api/data.json');
  return {
    type: GET_POSTS,
  }
    // return (dispatch: any) => {
    //     return axios.get("https://www.techiediaries.com/api/data.json")
    //         .then(response => {
    //             return response.data
    //         })
    //         .then(data => {
    //             dispatch({
    //                 type: GET_POSTS,
    //                 payload: data
    //             })
    //         })
    //         .catch(error => {
    //             throw (error);
    //         });
    // };
};
