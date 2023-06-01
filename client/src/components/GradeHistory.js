import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from './Modal';
import GradeTable from './GradeTable';
import '../styles/GradeHistory.css';
import Axios from 'axios';

const GradeHistory = () => {
// hook grabs className  from url
const { className } = useParams();
const [showModal, setShowModal] = useState(false);
//store assignments filtered based on className
const [filteredAssignments, setFilteredAssignments] = useState([]);

 // grab data from api when the className parameter changes; 
useEffect(() => {
Axios.get('http://localhost:3001/api/get').then((response) => {
const data = response.data;
//  data filtered according to className  
setFilteredAssignments(data.filter((assignment) => assignment.className === className));
});
}, [className]);


const calculateGradePercentage = (pointsEarned, totalPoints) => {
const percentage = (pointsEarned / totalPoints) * 100;
if (percentage >= 90) return 'A';
if (percentage >= 80) return 'B';
if (percentage >= 70) return 'C';
if (percentage >= 60) return 'D';
return 'F';
};

 // Calculate the total points earned and grade percentage
const totalPoints = filteredAssignments.reduce((sum, assignment) => sum + assignment.totalPoints, 0);
const pointsEarned = filteredAssignments.reduce((sum, assignment) => sum + assignment.pointsEarned, 0);
const gradePercentage = calculateGradePercentage(pointsEarned, totalPoints);

return (
<div className="container-history">
<h2>Current Grades: {className}</h2>
<button className="edit-btn" onClick={() => setShowModal(true)}>
Simulate Grade
</button>
<GradeTable filteredAssignments={filteredAssignments} />
<div className="floating-container-grade">

        <div className='final-score'>
        <p>Grade: {gradePercentage}</p>
        <p>Final Points Earned: {pointsEarned}</p>
        <p>Total Points: {totalPoints}</p>
        </div>
      </div>
{showModal && (
<Modal
// props passed to modal.js
       showModal={showModal}
       setShowModal={setShowModal}
       filteredAssignments={filteredAssignments}
     />
)}
</div>
);
};

export default GradeHistory;