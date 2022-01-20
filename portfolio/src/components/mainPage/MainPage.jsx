import React from 'react';
import './Main.css';

import developerImg from '../../img/icon/svg.svg';

export default function MainPage() {
  return (
    <>
      <main className="main-page">
        <div className="main-content">
          <div>
            <span className="greeting">
              Olá <img src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" alt="gif-hand" width="100px" />
              , eu sou
            </span>
            <br />
            <span className="my-name">Douglas Oliveira</span>
            <br />
            <span className="greeting">Desenvolvedor Front-end</span>
          </div>
          <div>
            <img src={ developerImg } alt="developer-icon" width="800px"/>
          </div>
        </div>
      </main>
    </>
  );
}
