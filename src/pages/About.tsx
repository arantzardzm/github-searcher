import React from 'react';

const About = () => (
  <div className="wrapper-top">
    <h1>About</h1>
    <p>
      This is a Github search application! It allows a user to type in any
      search and filter out by user, repository, or issue.
    </p>
    <p>
      Give it a try
      {' '}
      <a href="/search">here</a>
      !
    </p>
  </div>
);

export default About;
