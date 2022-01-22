import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-content" name="sobre">
      <div className="about-me-name about-div">
        <p className="about-my-name about">Sobre mim...</p>
        <hr className="about-my-name" />
      </div>
      <div className="about-div">
        <p className="description-me">
          Sou <b>Desenvolvedor Web<span className="front-end">Front-End</span></b> e estou em busca de me tornar um <b>Desenvolvedor web <span className="full-stack">Full Stack</span></b>.    
        </p>
        <p className="description-me">
          <b>
          Venho me dedicando a sempre está evoluindo meus conhecimentos e praticando o aprendizado.
          </b> 
        </p>
      </div>
      <div className="about-div">
        <img
          src="https://avatars.githubusercontent.com/u/83235564?v=4"
          alt="picture-doug"
          className="my-photo"
        />
      </div>
    </div>
  );
}
