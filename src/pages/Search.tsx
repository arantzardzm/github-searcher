import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Input from '../components/Input';
import Select from '../components/Select';
import Grid from '../components/Grid';
import Loader from '../components/Loader';
import Props from '../interfaces/Props';

import {
  getUserSelectInput,
  getUserSearchInput,
  getUserPosts,
  clearUserPosts,
} from '../redux/Github/actions';

let debounceInterval: any;

const Search = (props: Props) => {
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

  const onInputChange = (value: string) => {
    clearTimeout(debounceInterval);
    getSearchInput(value);
    if (value.length >= 3) {
      debounceInterval = setTimeout(async () => {
        getPosts(selectInput, value);
      }, 2000);
    } else {
      clearPosts();
    }
  };

  const onSelectChange = (value: string) => {
    getSelectInput(value);
    if (searchInput.length >= 3) {
      getPosts(value, searchInput);
    }
  };

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
              input={searchInput}
              placeholder="Please enter an input"
              onChange={(e: any) => onInputChange(e.target.value)}
            />
            <Select
              input={selectInput}
              options={['Users', 'Repositories']}
              onChange={(e: any) => onSelectChange(e.target.value)}
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
