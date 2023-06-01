import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ClassList.css';

const classes = [
  { name: 'English', room: '101', teacher: 'Mr. Smith', className: 'english' },
  { name: 'Math', room: '201', teacher: 'Mrs. Johnson', className: 'math' },
  { name: 'Gym', room: 'Gymnasium', teacher: 'Coach Anderson', className: 'gym' },
  { name: 'Science', room: '301', teacher: 'Mr. Davis', className: 'science' },
  { name: 'History', room: '301', teacher: 'Mrs. Anderson', className: '' },
];

const ClassList = () => {
  return (
    <div className='class-container'>
      <h2>Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Room</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={index} className='class-row'>
              <td>
                <Link className='class-link' to={`/grade-history/${cls.name}`}>{cls.name}</Link>
              </td>
              <td>{cls.room}</td>
              <td>{cls.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;
