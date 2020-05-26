import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardId from './components/cardId/cardId';
import Greetings from './components/greetings/greetings';
import Random from './components/random/random';
import BoxColor from './components/boxColor/boxColor';
import CreditCard from './components/creditCard/creditCard';
import LikeButton from './components/likeButton/likeButton';
import ClickablePicture from './components/clickablePicture/clickablePicture';

function App() {
  return (
    <div className="App">
      <CardId
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toLocaleDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      ></CardId>

      <CardId
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toLocaleDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      ></CardId>

      <Greetings lang="es">Cesar</Greetings>
      <Random min={1} max={5}></Random>
      <BoxColor r={180} g={55} b={100}></BoxColor>
      <div className="row">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <LikeButton></LikeButton>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
