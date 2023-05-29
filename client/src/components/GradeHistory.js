import React from 'react';

// dummy assignments
const assignments = [
  { date: '2023-05-01', totalPoints: 100, pointsEarned: 85 },
  { date: '2023-05-08', totalPoints: 100, pointsEarned: 95 },
  { date: '2023-05-15', totalPoints: 100, pointsEarned: 80 },
  { date: '2023-05-22', totalPoints: 100, pointsEarned: 75 }
];

// function to determine letter grade
const calculateGradePercentage = (pointsEarned, totalPoints) => {
  const percentage = (pointsEarned / totalPoints) * 100;
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'E';
};

const GradeHistory = () => {

  return (
    <div>
      <h2>Grade History - className</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Points</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {/* create a function to map through all possible grade above */}
            <tr >
              <td>date</td>
              <td>totalPoints</td>
              <td>points earned</td>
            </tr>
     
        </tbody>
      </table>
      <div>
        <p>Final Points Earned</p>
        <p>Total Points</p>
        <p>Letter Grade</p>
      </div>
    </div>
  );
};

export default GradeHistory;
