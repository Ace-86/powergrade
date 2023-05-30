import React from 'react';

const ModalTable = ({ modal_assignments, handleGradeChangeModal }) => {
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
        {modal_assignments.map((massignment, index) => (
          <tr key={index}>
            <td>{massignment.work}</td>
            <td>{massignment.category}</td>
            <td>{massignment.date}</td>
            <td>{massignment.totalPoints}</td>
            <td>
              {massignment.pointsEarned === 0 ? (
                <input
                  type="number"
                  min="0"
                  max={massignment.totalPoints}
                  value={massignment.pointsEarned}
                  onChange={(event) => handleGradeChangeModal(event, index)}
                />
              ) : (
                massignment.pointsEarned
              )}
            </td>
            <td>{massignment.percentage}</td>
            <td>{massignment.letter_grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModalTable;
