import React from 'react';
import './cardId.css';

const CardId = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="cardId">
      <div>
        <img src={picture} alt="" />
      </div>
      <div className="cardId-info">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth}
        </p>
      </div>
    </div>
  );
};

export default CardId;
