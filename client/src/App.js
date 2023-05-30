import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClassList from './components/ClassList';
import GradeHistory from './components/GradeHistory';
import './App.css';

function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" exact element={<ClassList />} />
      <Route path="/grade-history/:className"  element={<GradeHistory />} />
    </Routes>
  </Router>
);
};


export default App;
