import React from 'react';
import './creditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let cardTypeImg = '';
  let lastFour = number.split('').slice(-4).join('');
  let twoDigitsYear = expirationYear.toString().split('').slice(-2).join('');
  console.log(lastFour);
  if (type === 'Visa') cardTypeImg = 'img/visa.png';
  if (type === 'Master Card') cardTypeImg = 'img/master-card.svg';

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div>
        <img src={cardTypeImg} alt="" />
      </div>
      <div>
        <h1>°°°° °°°° °°°° {lastFour}</h1>
      </div>
      <div>
        <p>
          Expires {expirationMonth}/{twoDigitsYear} <span>{bank}</span>
        </p>
      </div>
      <div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
