import React from 'react';
import About from './About';
import Home from './Home';
import Welcome from './Welcome';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import Contact from './Contact';
import ContactList from './ContactList';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Welcome />}/>
          <Route path="about" element={<About />} />
          <Route path='posts' element={<Posts />} />
          <Route path="contacts" element={<ContactList />} >
            <Route index element={<p>Select a contact for more details</p>}/>
            <Route path=":contactId" element={<Contact />} />
            <Route path="*" element={<h1>Contact Not Found</h1>} />
        </Route>
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
