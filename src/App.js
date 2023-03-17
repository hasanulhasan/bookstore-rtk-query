import React from 'react';
import Home from './Pages/Home';
import './App.css'
import Navbar from './components/Navbar';
import AddBook from './Pages/AddBook';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import EditBook from './Pages/EditBook';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/edit/:bookId" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
