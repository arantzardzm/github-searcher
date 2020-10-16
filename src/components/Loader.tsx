import React from 'react';

interface Props {
  status: 'success' | 'loading' | 'error';
}

const Loader = (props: Props) => {
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
