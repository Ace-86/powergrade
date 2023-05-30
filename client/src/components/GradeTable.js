import React from 'react';

const GradeTable = ({ filteredAssignments, handleGradeChange }) => {
  return (
    <table>
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
            <td>
              {assignment.pointsEarned === 0 ? (
                <input
                  type="number"
                  min="0"
                  max={assignment.totalPoints}
                  value={assignment.pointsEarned}
                  onChange={(event) => handleGradeChange(event, index)}
                />
              ) : (
                assignment.pointsEarned
              )}
            </td>
            <td>{assignment.percentage}</td>
            <td>{assignment.letter_grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GradeTable;