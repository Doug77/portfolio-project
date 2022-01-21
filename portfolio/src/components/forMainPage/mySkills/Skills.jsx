import React from 'react';
import './Skills.css';

import skillimg from '../../../img/icon/skillimg (1).svg';

export default function Skills() {
  const SPACE = " - ";
  return (
    <div className="skill-content">
      <div>
        <img src={ skillimg } alt="skill-icon" width="850px"/>
      </div>
      <div className="skill-list-ul">
        <ul>
          <h3 className="title-list-skill">Habilidades que possuo</h3>
          <li className="list-item">
            React
            { SPACE }
            <img src="https://img.icons8.com/ultraviolet/35/000000/react--v1.png"/>
          </li>
          <li className="list-item">
            Redux
            { SPACE }
            <img src="https://img.icons8.com/color/35/000000/redux.png"/> 
          </li>
          <li className="list-item">
            JavaScript
            { SPACE }
            <img src="https://img.icons8.com/color/35/000000/javascript--v1.png"/>
          </li>
          <li className="list-item">
            HTML
            { SPACE }
            <img src="https://img.icons8.com/color/35/000000/html-5--v1.png"/>
          </li>
          <li className="list-item">
            CSS
            { SPACE }
            <img src="https://img.icons8.com/color/35/000000/css3.png"/>
          </li>
          <li className="list-item">
            Git
            { SPACE }
            <img src="https://img.icons8.com/color/35/000000/git.png"/>
          </li>
          <li className="list-item">
            GitHub
            { SPACE }
            <img src="https://img.icons8.com/material-outlined/35/000000/github.png"/>
          </li>
        </ul>
      </div>
    </div>
  );
}
