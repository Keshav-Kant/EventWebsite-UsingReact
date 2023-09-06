import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import CustomCursor from './component/Cursor';
function App() {
  return (
    <>
      <Router>
        <div className="app">
        <CustomCursor />
          <Routes>
            <Route path="/" element={<Home />} index={true} />
            <Route path="/HOME" element={<Home />} />
            <Route path="/HOME" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
