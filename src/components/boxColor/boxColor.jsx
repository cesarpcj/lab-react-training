import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const color = [r, g, b];
  return (
    <div style={{ backgroundColor: `rgb(${color})` }}>
      <h1>oi</h1>
    </div>
  );
};

export default BoxColor;
