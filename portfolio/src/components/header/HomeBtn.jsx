import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBtn.css'

export default function HomeBtn() {
  return (
    <div>
      <Link to="/home">
        <span className="brackets">{'{'}</span>
          dev-doug
        <span className="brackets">{'}'}</span>
      </Link>
    </div>
  );
}
