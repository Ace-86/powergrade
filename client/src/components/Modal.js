import React, { useState, useEffect } from 'react';
import ModalTable from './ModalTable';
import '../styles/Modal.css';


const Modal = ({ showModal, setShowModal, filteredAssignments }) => {
  const [modalAssignments, setModalAssignments] = useState(filteredAssignments);

 // Handler function for grade change in the modal
  const handleGradeChangeModal = (event, index) => {
    const newPointsEarned = parseInt(event.target.value);
    setModalAssignments((prevAssignments) => {
      const updatedAssignments = [...prevAssignments];
// Update the possiblePointsEarned for the assignment at the given index
      updatedAssignments[index].possiblePointsEarned = newPointsEarned;
      return updatedAssignments;
    });
  };

  // Calculate percentage based on points earned and total points
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
  }, [modalAssignments.length]);
  

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
          <ModalTable
            modalAssignments={modalAssignments}
            handleGradeChangeModal={handleGradeChangeModal}
            setModalAssignments={setModalAssignments}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;