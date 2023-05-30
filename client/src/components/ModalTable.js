import React from 'react';

const ModalTable = ({ modalAssignments, handleGradeChangeModal }) => {
  const calculatePossibleTotalPointsEarned = () => {
    let possibleTotalPointsEarned = 0;
    modalAssignments.forEach((assignment) => {
      possibleTotalPointsEarned += assignment.possiblePointsEarned;
    });
    return possibleTotalPointsEarned;
  };

  const calculatePossiblePercentage = () => {
    const possibleTotalPointsEarned = calculatePossibleTotalPointsEarned();
    let totalPoints = 0;
    let totalPointsEarned = 0;
    modalAssignments.forEach((assignment) => {
      totalPoints += assignment.totalPoints;
      totalPointsEarned += assignment.pointsEarned;
    });
    totalPointsEarned += possibleTotalPointsEarned;
    if (totalPoints === 0) {
      return 0;
    }
    return ((totalPointsEarned / totalPoints) * 100).toFixed(2);
  };

  const calculatePossibleGrade = () => {
    const possiblePercentage = calculatePossiblePercentage();
    if (possiblePercentage >= 90) {
      return 'A';
    } else if (possiblePercentage >= 80) {
      return 'B';
    } else if (possiblePercentage >= 70) {
      return 'C';
    } else if (possiblePercentage >= 60) {
      return 'D';
    } else {
      return 'E';
    }
  };

  return (
    <div>
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
          {modalAssignments.map((assignment, index) => (
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
                    value={assignment.possiblePointsEarned}
                    onChange={(event) => handleGradeChangeModal(event, index)}
                  />
                ) : (
                  assignment.pointsEarned
                )}
              </td>
              <td>{assignment.percentage || '-'}</td>
              <td>{assignment.letter_grade || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="modal-footer">
        <div className="total-grade">
          <span>Possible Total Grade: </span>
          <span>{calculatePossibleGrade()}</span>
        </div>
        <div className="total-percent">
          <span>Possible Total Percent: </span>
          <span>{calculatePossiblePercentage()}%</span>
        </div>
      </div>
    </div>
  );
};

export default ModalTable;
