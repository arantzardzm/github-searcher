import React from 'react';

const Select = (props: any) => {
  const {
    getSelect, getPosts, searchInput, selectInput,
  } = props;

  const onChangeHandler = (value: string) => {
    getSelect(value);
    if (searchInput.length >= 3) {
      getPosts(value, searchInput); // stop debounce call
    }
  };

  return (
    <>
      <select
        onChange={(e) => onChangeHandler(e.target.value)}
        value={selectInput || ''}
      >
        <option>Users</option>
        <option>Repositories</option>
      </select>
    </>
  );
};

export default Select;
