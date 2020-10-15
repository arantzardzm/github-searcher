import React from 'react';
import { connect } from "react-redux"

// import {
//   increaseCounter,
//   decreaseCounter,
// } from "../redux/Counter/counter.actions"

import {
  getPosts
} from '../redux/Github/actions';

const About = (props: any) => {
  console.log("here", props);
  return (
    <div className="top-left-align">
      <h1>About</h1>
      <div>Posts</div>
      <button onClick={() => props.getPosts()}>Here</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.github.posts
    // count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPosts: () => dispatch(getPosts()),
    // increaseCounter: () => dispatch(increaseCounter()),
    // decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
