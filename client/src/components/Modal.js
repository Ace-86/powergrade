import React, { useState, useEffect } from 'react';
import ModalTable from './ModalTable';
import '../styles/Modal.css';

const Modal = ({ showModal, setShowModal, handleGradeOptionClick, selectedGrade, setSelectedGrade, totalPoints }) => {
   const assessment = [
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 10, pointsEarned: 0 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 85 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 0 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 90 },
  ];

  const [modalAssignments, setModalAssignments] = useState(assessment);
    const [selectedFinalGrade, setSelectedFinalGrade] = useState('');
  const handleGradeChangeModal = (event, index) => {
    const newPointsEarned = parseInt(event.target.value);
    setModalAssignments((prevAssignments) => {
      const updatedAssignments = [...prevAssignments];
      updatedAssignments[index].possiblePointsEarned = newPointsEarned;
      return updatedAssignments;
    });
  };

  const calculatePercentage = (pointsEarned, totalPoints) => {
    if (totalPoints === 0) {
      return 0;
    }
    return ((pointsEarned / totalPoints) * 100).toFixed(2);
  };

  const calculateGrade = (percentage) => {
    if (percentage >= 90) {
      return 'A';
    } else if (percentage >= 80) {
      return 'B';
    } else if (percentage >= 70) {
      return 'C';
    } else if (percentage >= 60) {
      return 'D';
    } else {
      return 'E';
    }
  };

  useEffect(() => {
    const updatedAssignmentsCopy = modalAssignments.map((assignment) => {
      const percentage = calculatePercentage(assignment.pointsEarned, assignment.totalPoints);
      const grade = calculateGrade(percentage);
      return { ...assignment, percentage, letter_grade: grade };
    });
    setModalAssignments(updatedAssignmentsCopy);
  }, [modalAssignments]);

  const handleSubmit = () => {
    const updatedAssignmentsCopy = modalAssignments.map((assignment) => {
      if (assignment.pointsEarned === 0) {
        const percentage = calculatePercentage(assignment.possiblePointsEarned, assignment.totalPoints);
        const grade = calculateGrade(percentage);
        return {
          ...assignment,
          percentage,
          letter_grade: grade,
        };
      }
      return assignment;
    });
  
    // Update the selected final grade
    setSelectedFinalGrade(calculateGrade(calculatePercentage(totalPoints - selectedGrade, totalPoints)));
  
    setModalAssignments(updatedAssignmentsCopy);
  };
  

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Current Grades: Edit</h2>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            &times;
          </button>
        </div>
        <div className="modal-body">
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
        </div>
        <div className="modal-sidebar">
          <h3>Choose Final Grade:</h3>
          <div className="grade-buttons">
            {/* ...existing grade buttons... */}
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        </div>
        </div>

  );
};

export default Modal;