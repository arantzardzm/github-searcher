import React from 'react';

const Grid = (props: any) => {
  const { posts } = props;
  let mappedPosts = [];
  if (posts) {
    mappedPosts = posts.map((item: any) => (
      <div className="grid-item">
        <div className="grid-item-image">
          <img src={item.avatar_url} alt="img" width="100" height="100" />
        </div>
        <div className="grid-item-text">
          Id:
          {' '}
          {item.id}
          {' '}
          <br />
          Name:
          {' '}
          {item.login}
          {' '}
          <br />
          <a href={item.html_url} target="_blank" rel="noreferrer">Link to repository</a>
          {' '}
          <br />
        </div>
      </div>
    ));
  }
  return (
    <>
      <div className="grid-container">
        {mappedPosts}
      </div>
    </>
  );
};

export default Grid;
