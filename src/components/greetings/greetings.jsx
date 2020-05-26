import React from 'react';

const Greetings = ({ lang, children }) => {
  let helloTxt = '';
  switch (lang) {
    case 'de':
      helloTxt = 'Hallo';
      break;
    case 'en':
      helloTxt = 'hello';
      break;
    case 'es':
      helloTxt = 'Ola';
      break;
    case 'fr':
      helloTxt = 'Bonjour';
      break;
    default:
      helloTxt = 'Hello';
  }

  return (
    <div>
      <h2>
        {helloTxt} {children}
      </h2>
    </div>
  );
};

export default Greetings;
