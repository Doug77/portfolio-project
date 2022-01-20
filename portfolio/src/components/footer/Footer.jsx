import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="content-footer">
      <div className="name-footer">
        Desenvolvido por Douglas Oliveira
      </div>
      <div className="name-footer">|</div>
      <div className="icon-footer">
        <Link to={{ pathname: "https://github.com/Doug77" }} target="_blank" >
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="github-icon"
            width="30px"
          /> 
        </Link>
        GitHub
        <Link to={{ pathname: "https://www.linkedin.com/in/douglas-d-oliveira/" }} target="_blank" >
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin-icon"
            width="30px"
          />
        </Link>
        LinkedIn
      </div>
    </footer>
  );
}
