import { GET_POSTS } from './types'

const INITIAL_STATE = {
  posts: [
    {id: 1, title: 'asdf'},
    {id: 1, title: 'asdf'}
  ],
}

const reducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type){
    case GET_POSTS:
      return {
            ...state,
            posts: state.posts, // todo
        }
      default: return state
    }
}

export default reducer;
