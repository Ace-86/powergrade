import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from './Modal';
import GradeTable from './GradeTable';

const assignments = [
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 10, pointsEarned: 0, percentage: '0%', letter_grade: 'E'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 85, percentage: '85%', letter_grade: 'B'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 0, percentage: '0%', letter_grade: 'E'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 90, percentage: '90%', letter_grade: 'A'},
];

const calculateGradePercentage = (pointsEarned, totalPoints) => {
  const percentage = (pointsEarned / totalPoints) * 100;
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'E';
};

const GradeHistory = () => {
  const { className } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState('');

  // Filter assignments based on className
  useState(() => {
    const filtered = assignments.filter((assignment) => assignment.className === className);
    setFilteredAssignments(filtered);
  }, [className]);

  const totalPoints = filteredAssignments.reduce((sum, assignment) => sum + assignment.totalPoints, 0);
  const pointsEarned = filteredAssignments.reduce((sum, assignment) => sum + assignment.pointsEarned, 0);
  const gradePercentage = calculateGradePercentage(pointsEarned, totalPoints);


  const handleGradeChange = (event, index) => {
    const newPointsEarned = parseInt(event.target.value);
    const updatedAssignments = [...filteredAssignments];
    updatedAssignments[index].pointsEarned = newPointsEarned;
    const newPointsEarnedTotal = updatedAssignments.reduce(
      (sum, assignment) => sum + assignment.pointsEarned,
      0
    );

    const newGradePercentage = calculateGradePercentage(
      newPointsEarnedTotal,
      totalPoints
    );
    setSelectedGrade(newGradePercentage);
  };

  const handleGradeOptionClick = (grade) => {
    setSelectedGrade(grade);
    const updatedAssignments = [...filteredAssignments];
    const gradePercentage = grade === 'A' ? 90 : grade === 'B' ? 80 : grade === 'C' ? 70 : 60;
    const maxPointsEarned = (gradePercentage / 10) * totalPoints;
    updatedAssignments.forEach((assignment) => {
      if (assignment.pointsEarned === 0) {
        assignment.pointsEarned = maxPointsEarned;
      }
    });
  };

  return (
    <div className="container">
      <h2>Current Grades: {className}</h2>
      <button className="edit-btn" onClick={() => setShowModal(true)}>
        Edit Grades
      </button>
      <GradeTable filteredAssignments={filteredAssignments} handleGradeChange={handleGradeChange} />
      <div>
        <p>Final Points Earned: {pointsEarned}</p>
        <p>Total Points: {totalPoints}</p>
        <p>Grade: {gradePercentage}</p>
      </div>
   <Modal
  showModal={showModal}
  setShowModal={setShowModal}
  filteredAssignments={filteredAssignments}
  handleGradeChange={handleGradeChange}
  handleGradeOptionClick={handleGradeOptionClick}
  pointsEarned={pointsEarned}
  totalPoints={totalPoints}
  gradePercentage={gradePercentage}
/>

    </div>
  );
};

export default GradeHistory;
