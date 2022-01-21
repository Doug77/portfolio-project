import React, { useEffect, useState, useRef } from 'react';
import './SlideSkill.css';

export default function SlideSkill() {
  const colors = ["#141414", "#242424"];

  const skillIcon = [
    "https://img.icons8.com/ultraviolet/35/000000/react--v1.png",
    "https://img.icons8.com/color/35/000000/redux.png",
    "https://img.icons8.com/color/35/000000/javascript--v1.png",
    "https://img.icons8.com/color/35/000000/html-5--v1.png",
    "https://img.icons8.com/color/35/000000/css3.png",
    "https://img.icons8.com/color/35/000000/git.png",
    "https://img.icons8.com/material-outlined/35/000000/github.png",
  ];

  const skill = [
    "React",
    "Redux",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
  ];

  const delay = 3500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {
          skill.map((el) => (
            skillIcon.map((icon, index) => (
              <div className="slide" key={index} style={{ icon }} >
                {el}
                <img src={icon} alt="test" />
              </div>
            ))
          ))
        }
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

//https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react

