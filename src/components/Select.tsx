import React from 'react';

const Select = (props: any) => {
  const { select, selectInput } = props;
  return (
    <>
      <select onChange={(e) => select(e.target.value)} value={selectInput || ''}>
        <option>Users</option>
        <option>Repositories</option>
      </select>
    </>
  );
};

export default Select;
