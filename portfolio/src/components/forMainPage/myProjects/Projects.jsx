import React from 'react';
import { Link } from 'react-router-dom';
import { arrayDataProjects } from '../../../data/projects';
import './Projects.css';

import codingProject from '../../../img/icon/codingmyproject.svg';

export default function Projects() {
  return (
    <div className="project-content" name="projetos">
      <div>
        <h1 className="header-content-project">Projetos que desenvolvi até hoje 👨‍💻</h1>
        {
          arrayDataProjects.map((el, index) => {
            const {description, project, link } = el;
            return (
              <div className="div-project" key={ index }>
                <h3 className="title-project">{ project }</h3>
                <p className="description-project">
                  { description }
                </p>
                <p className="link-to-project"><Link to={{ pathname: link }} target="_blank">Link para o repositório</Link></p>
              </div>
            )
          })
        }
        <Link to="/projects">Ver todos projetos...</Link>
      </div>
      <div className="img-content">
        <img src={ codingProject } alt="icon-developer"  width="700px"/>
      </div>
    </div>
  );
}
