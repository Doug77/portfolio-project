import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link>Sobre</Link>
      <Link>Habilidades</Link>
      <Link>Projetos</Link>
      <Link>Contato</Link>
    </header>
  );
}
