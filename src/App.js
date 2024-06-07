import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import SecondScreen from './pages/SecondScreen';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/second' element={<SecondScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
