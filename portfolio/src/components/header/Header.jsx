import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div>
          <span className="brackets">{'{'}</span>
          {'dev-doug'}
          <span className="brackets">{'}'}</span>
        </div>
        <div>
          <Link>Sobre</Link>
          <Link>Habilidades</Link>
          <Link>Projetos</Link>
          <Link>Contato</Link>
        </div>
      </header>
      <div div className="div-header">
        <hr/>
      </div>
    </>
  );
}
