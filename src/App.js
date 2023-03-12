import React from 'react';
import About from './About';
import Home from './Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
