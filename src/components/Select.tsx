import React from 'react';

const Select = (props: any) => {
  const { select } = props;
  return (
    <>
      <select onChange={(e) => select(e.target.value)}>
        <option>Users</option>
        <option>Repositories</option>
      </select>
    </>
  );
};

export default Select;
