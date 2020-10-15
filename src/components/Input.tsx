import React from 'react';

const Input = (props: any) => {
  const { search } = props;
  return (
    <>
      <input onChange={(e) => search(e.target.value)} placeholder="Input to search" />
    </>
  );
};

export default Input;
