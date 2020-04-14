import React from 'react';
import Player from './Player';
import './Classroom.css';

function Classroom() {
  return (
    <div className="Classroom">
      <div className="TopNav">
        <ul className="TopNav__list">
          <li className="TopNav__list-item"><button className="TopNav__link">Browse Courses</button></li>
          <li className="TopNav__list-item"><button className="TopNav__link">Curent Course</button></li>
          <li className="TopNav__list-item"><button className="TopNav__link isSelected">Classroom</button></li>
        </ul>
      </div>
      <div className="Classroom__content">
        <Player />
      </div>
    </div>
  );
}

export default Classroom;
