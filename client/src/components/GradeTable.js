import React from 'react';
import '../styles/GradeTable.css';


const GradeTable = ({ filteredAssignments }) => {
  return (
    <div className="grade-table">
    <h2 className="grade-table-title">Grades</h2>
    <table className="grade-table-content">
      <thead>
        <tr>
          <th>Assignment</th>
          <th>Category</th>
          <th>Date</th>
          <th>Total Points</th>
          <th>Points Earned</th>
          <th>%</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over the filteredAssignments array */}
        {filteredAssignments.map((assignment, index) => ( 
          // creates indiv. assignment row each with unique key
          <tr key={index}>
            <td>{assignment.work}</td>
            <td>{assignment.category}</td>
            <td>{assignment.date}</td>
            <td>{assignment.totalPoints}</td>
            <td>{assignment.pointsEarned}</td>
            <td>{assignment.percent}</td>
            <td>{assignment.perm_grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default GradeTable;
