import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Grid from '../components/Grid';

const Search = () => (
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
      </div>
      <div className="grid-wrapper">
        <Grid />
      </div>
    </div>
  </>
);

export default Search;
