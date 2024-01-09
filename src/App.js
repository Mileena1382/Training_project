import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NewJoineyDisplay} from './Pages/NewJoineyDisplay'
import NewjoineyRegister from './Pages/NewJoineyRegister';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/deck" element={<NewJoineyDisplay />} />
        <Route path="/" element={<NewjoineyRegister />} />
      </Routes>
    </Router>
  );
}

export default App;

