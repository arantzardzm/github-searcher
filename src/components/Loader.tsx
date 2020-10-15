import React from 'react';

const Loader = (props: any) => {
  const { status } = props;
  let className = 'hidden';
  if (status === 'loading') {
    className = 'visible';
  }
  return (
    <div className={className}>
      <div className="spinner" />
    </div>
  );
};

export default Loader;
