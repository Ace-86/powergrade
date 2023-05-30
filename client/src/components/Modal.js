import React, { useState } from 'react';
import ModalTable from './ModalTable';
import '../styles/Modal.css';

const Modal = ({ showModal, setShowModal, handleGradeOptionClick, selectedGrade, setSelectedGrade, totalPoints }) => {
  const assesment = [
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 10, pointsEarned: 0, percentage: '0%', letter_grade: 'E'},
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 85, percentage: '85%', letter_grade: 'B'},
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 0, percentage: '0%', letter_grade: 'E'},
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 90, percentage: '90%', letter_grade: 'A'},
  ];

  const [modalAssignments] = useState(assesment); // Use `assesment` directly instead of `filteredAssignments`

  const [updatedAssignments, setUpdatedAssignments] = useState(modalAssignments);

  const handleGradeChangeModal = (event, index) => {
    const newPointsEarned = parseInt(event.target.value);
    const updatedAssignmentsCopy = [...updatedAssignments];
    updatedAssignmentsCopy[index].pointsEarned = newPointsEarned;
    setUpdatedAssignments(updatedAssignmentsCopy);
  };

  const closeModal = () => {
    setShowModal(false);
    setUpdatedAssignments([...modalAssignments]); // Reset updatedAssignments to original values
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
          <ModalTable modal_assignments={updatedAssignments} handleGradeChangeModal={handleGradeChangeModal} />
        </div>
        <div className="modal-sidebar">
          <h3>Choose Final Grade:</h3>
          <div className="grade-buttons">
            <button
              className={`grade-btn ${selectedGrade === 'A' ? 'active' : ''}`}
              onClick={() => handleGradeOptionClick('A')}
            >
              A
            </button>
            <button
              className={`grade-btn ${selectedGrade === 'B' ? 'active' : ''}`}
              onClick={() => handleGradeOptionClick('B')}
            >
              B
            </button>
            <button
              className={`grade-btn ${selectedGrade === 'C' ? 'active' : ''}`}
              onClick={() => handleGradeOptionClick('C')}
            >
              C
            </button>
            <button
              className={`grade-btn ${selectedGrade === 'D' ? 'active' : ''}`}
              onClick={() => handleGradeOptionClick('D')}
            >
              D
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
