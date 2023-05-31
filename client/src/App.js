import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassList from './components/ClassList';
import GradeHistory from './components/GradeHistory';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ClassList />} />
        <Route path="/grade-history/:className" element={<GradeHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
