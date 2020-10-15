import React, { useRef } from 'react';
import { debounce } from 'lodash';

const Input = (props: any) => {
  const { getSearch, getPosts, searchInput, selectInput } = props;

  const debounceCall = useRef(
    debounce((value: string) => getPosts(selectInput, value), 2000)
  ).current;

  const onChangeHandler = (value: string) => {
    let abort = false;
    getSearch(value);
    if (value.length >= 3){
      debounceCall(value);
    }
  }

  return (
    <>
      <input
        onChange={(e) => onChangeHandler(e.target.value)}
        placeholder="Input to search"
        value={searchInput || ''}
      />
    </>
  );
};

export default Input;
