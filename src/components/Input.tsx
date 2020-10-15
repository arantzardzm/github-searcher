import React from 'react';

let debounceInterval: any;

const Input = (props: any) => {
  const {
    getSearch, getPosts, clearPosts, searchInput, selectInput,
  } = props;

  const onChangeHandler = (value: string) => {
    clearTimeout(debounceInterval);
    getSearch(value);
    if (value.length >= 3) {
      debounceInterval = setTimeout(async () => {
        getPosts(selectInput, value);
      }, 2000);
    } else {
      clearPosts();
    }
  };

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
