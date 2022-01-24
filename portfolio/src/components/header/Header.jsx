import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div>
          <span className="brackets">{'{'}</span>
            dev-doug
          <span className="brackets">{'}'}</span>
        </div>
        <div>
          <Link activeClass="active" to="sobre" spy={true} smooth={true} offset={-200} className='nav-header'>Sobre</Link>
          <Link activeClass="active" to="habilidades" spy={true} smooth={true}  offset={-50} className='nav-header'>Habilidades</Link>
          <Link activeClass="active" to="projetos" spy={true} smooth={true} className='nav-header'>Projetos</Link>
          <Link to="#">Contato</Link>
        </div>
      </header>
      <div div className="div-header">
        <hr className="hr-header"/>
      </div>
    </>
  );
}
