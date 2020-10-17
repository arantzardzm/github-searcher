import React from 'react';
import _ from 'lodash';

interface Props {
  posts: any;
  status: 'success' | 'loading' | 'error';
  input: string;
  text: string;
}

const getMappedPosts = (posts: any, input: string) => {
  let mappedPosts = [];
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
  } else if (input === 'Repositories') {
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
  } else {
    mappedPosts = posts.map((item: any) => (
      <div className="grid-item" key={item.id}>
        <div className="grid-item-text">
          Title:
          {' '}
          {item.title}
          {' '}
          <br />
          State:
          {' '}
          {item.state}
          {' '}
          <br />
          Comments:
          {' '}
          {item.comments}
          {' '}
          <br />
          Creation Date:
          {' '}
          {item.created_at}
          {' '}
          <br />
          <a href={item.html_url} target="_blank" rel="noopener noreferrer">
            Link to issue
          </a>
          {' '}
        </div>
      </div>
    ));
  }
  return mappedPosts;
};

const Grid = (props: Props) => {
  const {
    posts, status, input, text,
  } = props;
  let container;
  if (status === 'success') {
    let mappedPosts = [];
    let message;
    if (!_.isEmpty(posts)) {
      mappedPosts = getMappedPosts(posts, input);
    } else {
      message = <p>{text}</p>;
    }
    container = (
      <div className="grid-container">
        {!_.isEmpty(mappedPosts) ? mappedPosts : message}
      </div>
    );
  } else if (status === 'error') {
    container = (
      <div>
        <p>{text}</p>
      </div>
    );
  }

  return <>{container}</>;
};

export default Grid;
