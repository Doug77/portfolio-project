import React from 'react';
import './Main.css';

import developerImg from '../../img/icon/developer.svg';

export default function MainPage() {
  return (
    <main>
      <div>
        <h3>Olá ..., eu sou!</h3>
        <h1>Douglas Oliveira</h1>
        <h3>Desenvolvedor Front-end</h3>
      </div>
      <div>
        <img src={ developerImg } alt="developer-icon" />
      </div>
    </main>
  );
}
