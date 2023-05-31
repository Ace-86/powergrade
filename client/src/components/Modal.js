import React, { useState, useEffect } from 'react';
import ModalTable from './ModalTable';
import '../styles/Modal.css';


//dummy data
const Modal = ({ showModal, setShowModal }) => {
  const assessment = [
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 10, pointsEarned: 0 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 85 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 0 },
    { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 90 },
  ];

   // State variable to hold assignments with additional property
  const [modalAssignments, setModalAssignments] = useState(
    assessment.map((assignment) => ({ ...assignment, possiblePointsEarned: 0 }))
  );

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


  // Determine grade based on the percentage
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

    // Update assignments with calculated percentage and grade
  useEffect(() => {
    const updatedAssignmentsCopy = modalAssignments.map((assignment) => {
      const percentage = calculatePercentage(assignment.pointsEarned, assignment.totalPoints);
      const grade = calculateGrade(percentage);
      return { ...assignment, percentage, letter_grade: grade };
    });
    setModalAssignments(updatedAssignmentsCopy);
  }, [modalAssignments.length]);

  // Handle form submission to update assignments with possiblePointsEarned
const handleSubmit = () => {
  const updatedAssignmentsCopy = modalAssignments.map((assignment) => {
    if (assignment.pointsEarned === 0 && assignment.possiblePointsEarned !== 0) {
      const percentage = calculatePercentage(assignment.possiblePointsEarned, assignment.totalPoints);
      const grade = calculateGrade(percentage);
      return {
        ...assignment,
        pointsEarned: assignment.possiblePointsEarned,
        percentage,
        letter_grade: grade,
      };
    } else {
      return assignment;
    }
  });
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
        <ModalTable
          modalAssignments={modalAssignments}
          handleGradeChangeModal={handleGradeChangeModal}
          setModalAssignments={setModalAssignments}
        />
        </div>
        <div className="modal-sidebar">
          <h3>Possible Grade</h3>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
