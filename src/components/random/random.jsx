import React from 'react';

const Random = ({ min, max }) => {
  const rnd = min + Math.floor(Math.random() * max);
  return (
    <div>
      <h2>{rnd}</h2>
    </div>
  );
};

export default Random;
