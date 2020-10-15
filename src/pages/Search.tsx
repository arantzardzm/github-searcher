import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Grid from '../components/Grid';

import {
  getUserSelectInput,
  getUserSearchInput,
  getPosts,
} from '../redux/Github/actions';

const Search = (props: any) => {
  const { posts, selectInput, searchInput } = props;
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
            <Input search={props.getUserSearchInput} searchInput={searchInput}/>
            <Select select={props.getUserSelectInput} selectInput={selectInput}/>
          </form>
          <button type="button" onClick={() => props.getPosts(selectInput, searchInput)}>Here</button>
        </div>
        <div className="grid-wrapper">
          <Grid posts={items} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  selectInput: state.github.selectInput,
  searchInput: state.github.searchInput,
  posts: state.github.posts,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserSelectInput: (selectInput: string) => dispatch(getUserSelectInput(selectInput)),
  getUserSearchInput: (searchInput: string) => dispatch(getUserSearchInput(searchInput)),
  getPosts: (selectInput: string, searchInput: string) => dispatch(getPosts(selectInput, searchInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
