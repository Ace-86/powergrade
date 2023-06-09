import React from 'react';
import axios from 'axios';
import '../styles/ModalTable.css';

const ModalTable = ({ modalAssignments, handleGradeChangeModal, setModalAssignments }) => {

  // if student clicks on ! button, an email will be sent to them reminding them to turn in missing work
  const sendReminderEmail = (assignment) => {
    axios.post('http://localhost:3001/api/send-email', { assignment })
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  // Calculate the sum of possiblePointsEarned for all assignments
  const calTotalPointsEarned = () => {
    let possibleTotalPointsEarned = 0;
    modalAssignments.forEach((assignment) => {
      possibleTotalPointsEarned += assignment.possiblePointsEarned;
    });
    return possibleTotalPointsEarned;
  };

  // Calculate the percentage based on the sum of points earned and total points of all assignments
  const calculatePossiblePercentage = () => {
    const possibleTotalPointsEarned = calTotalPointsEarned();
    let totalPoints = 0;
    let totalPointsEarned = 0;
    modalAssignments.forEach((assignment) => {
      totalPoints += assignment.totalPoints;
      totalPointsEarned += assignment.pointsEarned + assignment.possiblePointsEarned; // Updated calculation
    });
    if (totalPoints === 0) {
      return 0;
    }
    return ((totalPointsEarned / totalPoints) * 100).toFixed(2);
  };

  // determine the grade based on the possible percentage
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
      return 'F';
    }
  };

  // Handle change in possiblePointsEarned for an assignment
  const handlePossibleGradeChange = (event, index) => {
    const newPointsEarned = parseInt(event.target.value);
    const updatedAssignments = [...modalAssignments];
    updatedAssignments[index].possiblePointsEarned = newPointsEarned;
    setModalAssignments(updatedAssignments);
  };

  return (
    <div className="modal-table-container">
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Category</th>
            <th>Date</th>
            <th>Total Points</th>
            <th>Points Earned</th>
            <th>Missing Grade</th>
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
                    onChange={(event) => handlePossibleGradeChange(event, index)}
                  />
                ) : (
                  assignment.pointsEarned
                )}
              </td>
              <td>
                {assignment.missingGrade === 1 && (
                  <button
                    className="missing-grade"
                    onClick={() => sendReminderEmail(assignment)}
                  >
                    !
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="floating-container">
        <div className="total-grade">
          <span>Possible Grade: </span>
          <span className='grade-calc'>{calculatePossibleGrade()}</span>
        </div>
        <div className="total-percent">
          <span>Possible Percentage: </span>
          <span className='percent-calc'>{calculatePossiblePercentage()}%</span>
        </div>
      </div>
    </div>
  );
};

export default ModalTable;