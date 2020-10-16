import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Input from '../components/Input';
import Select from '../components/Select';
import Grid from '../components/Grid';
import Loader from '../components/Loader';

import {
  getUserSelectInput,
  getUserSearchInput,
  getUserPosts,
  clearUserPosts,
} from '../redux/Github/actions';

const Search = (props: any) => {
  const {
    posts,
    selectInput,
    searchInput,
    status,
    getSelectInput,
    getSearchInput,
    getPosts,
    clearPosts,
  } = props;
  const { items } = posts;
  const className = _.isEmpty(posts) ? 'wrapper-full' : 'wrapper-top';

  return (
    <>
      <div className={className}>
        <Loader status={status} />
        <div>
          <h1>Github Searcher</h1>
          <p>Search users or repositories by typing in the input below</p>
        </div>
        <br />
        <div>
          <form>
            <Input
              getSearch={getSearchInput}
              getPosts={getPosts}
              clearPosts={clearPosts}
              searchInput={searchInput}
              selectInput={selectInput}
            />
            <Select
              getSelect={getSelectInput}
              getPosts={getPosts}
              searchInput={searchInput}
              selectInput={selectInput}
            />
          </form>
        </div>
        <div className="grid-wrapper">
          <Grid posts={items} status={status} selectInput={selectInput} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  selectInput: state.github.selectInput,
  searchInput: state.github.searchInput,
  posts: state.github.posts,
  status: state.github.status,
});

const mapDispatchToProps = (dispatch: any) => ({
  getSelectInput: (selectInput: string) => dispatch(getUserSelectInput(selectInput)),
  getSearchInput: (searchInput: string) => dispatch(getUserSearchInput(searchInput)),
  getPosts: (selectInput: string, searchInput: string) => {
    dispatch(getUserPosts(selectInput, searchInput));
  },
  clearPosts: () => dispatch(clearUserPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
