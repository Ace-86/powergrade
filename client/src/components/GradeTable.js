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
        {filteredAssignments.map((assignment, index) => (
          <tr key={index}>
            <td>{assignment.work}</td>
            <td>{assignment.category}</td>
            <td>{assignment.date}</td>
            <td>{assignment.totalPoints}</td>
            <td>{assignment.pointsEarned}</td>
            <td>{assignment.percentage}</td>
            <td>{assignment.letter_grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default GradeTable;
