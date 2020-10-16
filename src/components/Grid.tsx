import React from 'react';
import _ from 'lodash';

interface Props {
  posts: any;
  status: 'success' | 'loading' | 'error';
  input: string;
}

const Grid = (props: Props) => {
  const { posts, status, input } = props;
  let container;
  if (status === 'success') {
    let mappedPosts = [];
    let message;
    if (!_.isEmpty(posts)) {
      if (input === 'Users') {
        mappedPosts = posts.map((item: any) => (
          <div className="grid-item" key={item.id}>
            <div className="grid-item-image">
              <img src={item.avatar_url} alt="img" width="100" height="100" />
            </div>
            <div className="grid-item-text">
              Name:
              {' '}
              {item.login}
              {' '}
              <br />
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                Link to user account
              </a>
              {' '}
            </div>
          </div>
        ));
      } else {
        mappedPosts = posts.map((item: any) => (
          <div className="grid-item" key={item.id}>
            <div className="grid-item-text">
              Name:
              {' '}
              {item.name}
              {' '}
              <br />
              Language:
              {' '}
              {item.language}
              {' '}
              <br />
              Stars:
              {' '}
              {item.stargazers_count}
              {' '}
              <br />
              Forks:
              {' '}
              {item.forks_count}
              {' '}
              <br />
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                Link to repository
              </a>
              {' '}
            </div>
          </div>
        ));
      }
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
