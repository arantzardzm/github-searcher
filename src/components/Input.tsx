import React from 'react';

const Input = (props: any) => {
  const { search, searchInput } = props;
  return (
    <>
      <input onChange={(e) => search(e.target.value)} placeholder="Input to search" value={searchInput || ''}/>
    </>
  );
};

export default Input;
