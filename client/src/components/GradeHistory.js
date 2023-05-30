import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/GradeHistory.css';

//dummy assignments for all classes; these will be replaced with database values
const assignments = [
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
  { work: 'workbook page 45', category: 'in-class', className: 'Math', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},

  { work: 'Of Mice and Men Video', category: 'in-class', className: 'English', date: '2023-05-01', totalPoints: 100, pointsEarned: 85, percentage: '85%', letter_grade: 'B' },
  { work: 'workbook page 45', category: 'in-class', className: 'English', date: '2023-05-08', totalPoints: 100, pointsEarned: 95, percentage: '95%', letter_grade: 'A'},
  { work: '5-page summary: OMAM', category: 'in-class', className: 'English', date: '2023-05-15', totalPoints: 100, pointsEarned: 80, percentage: '80%', letter_grade: 'B' },
  { work: 'No Red Ink: Sentence Structure', category: 'in-class', className: 'English', date: '2023-05-22', totalPoints: 100, pointsEarned: 75, percentage: '75%', letter_grade:'C' }
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

  const filteredAssignments = assignments.filter(
    assignment => assignment.className === className
  );

  const totalPoints = filteredAssignments.reduce(
    (sum, assignment) => sum + assignment.totalPoints,
    0
  );
  const pointsEarned = filteredAssignments.reduce(
    (sum, assignment) => sum + assignment.pointsEarned,
    0
  );
  const gradePercentage = calculateGradePercentage(pointsEarned, totalPoints);

  return (
    <div className="container">
      <h2>Current Grades : {className}</h2>
      <table>
        <thead>
          <tr>
          <th>Assignment</th>
            <th>Category</th>
            <th>Date</th>
            <th>Total Points</th>
            <th>Points Earned</th>
            <th> % </th>
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
              <td>{assignment.pointsEarned}</td>
              <td>{assignment.percentage}</td>
              <td>{assignment.letter_grade}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Final Points Earned: {pointsEarned}</p>
        <p>Total Points: {totalPoints}</p>
        <p>Grade: {gradePercentage}</p>
      </div>
    </div>
  );
};

export default GradeHistory;
