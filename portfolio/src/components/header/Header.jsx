import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <span className="brackets">{'{'}</span>
              dev-doug
            <span className="brackets">{'}'}</span>
          </Link>
        </div>
        <div>
          <Link to="/#section1" className='nav-header'>Sobre</Link>
          <Link to="#">Habilidades</Link>
          <Link to="#">Projetos</Link>
          <Link to="#">Contato</Link>
        </div>
      </header>
      <div div className="div-header">
        <hr className="hr-header"/>
      </div>
    </>
  );
}
