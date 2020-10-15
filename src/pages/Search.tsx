import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Grid from '../components/Grid';

import { getPosts } from '../redux/Github/actions';

const Search = (props: any) => {
  const { posts } = props;
  const { items } = posts;

  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Github Searcher</h1>
          <p>Search users or repositories by typing in the input below</p>
        </div>
        <br />
        <div>
          <form>
            <Input />
            <Select />
          </form>
          <button type="button" onClick={() => props.getPosts()}>Here</button>
        </div>
        <div className="grid-wrapper">
          <Grid posts={items} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.github.posts,
});

const mapDispatchToProps = (dispatch: any) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
