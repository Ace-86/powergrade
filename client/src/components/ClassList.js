import React from 'react';
import { Link } from 'react-router-dom';


const classes = [
  { name: 'English', room: '101', teacher: 'Mr. Smith' },
  { name: 'Math', room: '201', teacher: 'Mrs. Johnson' },
  { name: 'Gym', room: 'Gymnasium', teacher: 'Coach Anderson' },
  { name: 'Science', room: '301', teacher: 'Dr. Davis' }
];

const ClassList = () => {
  return (
    <div>
      <h2>Classes</h2>
      <ul>
        {classes.map((cls, index) => (
          <li key={index}>
            <Link to={`/grade-history/${cls.name}`}>{cls.name}</Link> - Room: {cls.room}, Teacher: {cls.teacher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
