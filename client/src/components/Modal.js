import React, { useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ showModal, setShowModal, filteredAssignments, handleGradeChange, handleGradeOptionClick, selectedGrade }) => {
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

