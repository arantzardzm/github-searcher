import React from 'react';

const NotFound = () => (
  <div className="wrapper-top">
    <h1>Not Found</h1>
    <p>You tried to access a page that does not exist.</p>
    <p>
      Go
      {' '}
      <a href="/search">here</a>
      {' '}
      to do a search!
    </p>
  </div>
);

export default NotFound;
