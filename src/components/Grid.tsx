import React from 'react';
import _ from 'lodash';

const Grid = (props: any) => {
  const { posts, status } = props;

  let container;
  if (status === 'success') {
    let mappedPosts = [];
    let message;
    if (!_.isEmpty(posts)) {
      mappedPosts = posts.map((item: any) => (
        <div className="grid-item" key={item.id}>
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
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              Link to repository
            </a>
            {' '}
            <br />
          </div>
        </div>
      ));
    } else {
      message = <p>No records were found. Please try a different search!</p>;
    }
    container = (
      <div className="grid-container">
        {!_.isEmpty(mappedPosts) ? mappedPosts : message}
      </div>
    );
  } else if (status === 'error') {
    container = (
      <div>
        <p>An error has occurred. Please try again later.</p>
      </div>
    );
  }

  return <>{container}</>;
};

export default Grid;
