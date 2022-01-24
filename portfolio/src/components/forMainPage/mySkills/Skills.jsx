import React from 'react';
import './Skills.css';
import SlideSkill from '../../../Slideshow/slideskill/SlideSkill';

import skillimg from '../../../img/icon/thinkcode.svg';

export default function Skills() {
  return (
    <div className="skill-content" name="habilidades">
      <div>
        <img src={ skillimg } alt="skill-icon" width="850px"/>
      </div>
      <div className="skill-list-ul">
        <SlideSkill />
      </div>
    </div>
  );
}
