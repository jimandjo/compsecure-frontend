import React from 'react';
import About from './About';
import Home from './Home';
import Welcome from './Welcome';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import Contact from './Contact';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import NewPost from './components/NewPost';
import PostList from './components/PostList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { UserProvider } from './contexts/UserProvider';
import { PostProvider } from './contexts/PostProvider';

function App() {
  return (
    <UserProvider>
    <PostProvider>
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Welcome />}/>
          <Route path="about" element={<About />} />
          <Route path='posts' element={<Posts />} />
          <Route path="/signin" element={ <SignIn /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/post/new" element={ <NewPost /> } />
            <Route path="/post" element={ <PostList /> } />
          <Route path="contacts" element={<ContactList />} >
            <Route index element={<p>Select a contact for more details</p>}/>
            <Route path="new" element={<ContactForm />} />
            <Route path=":contactId/edit" element={<ContactForm />} />
            <Route path=":contactId" element={<Contact />} />

            <Route path="*" element={<h1>Contact Not Found</h1>} />
        </Route>
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
    </PostProvider>
    </UserProvider>
  );
}

export default App;
