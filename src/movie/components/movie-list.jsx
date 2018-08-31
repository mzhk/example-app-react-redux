import React from 'react';

const MovieList = ({ items }) => (
  <div>
    <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
  </div>
);

export default MovieList;