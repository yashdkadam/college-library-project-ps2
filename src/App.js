import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import AddBook from './components/addStudent';
import useToken from './useToken';
import Navbar from './components/Navbar';

function App() {
  const { token, setToken } = useToken();

  console.log((sessionStorage.token === undefined));
  
  return (
    <>
      <Navbar />
	  { (sessionStorage.token === undefined) && (  <Login setToken={setToken} />)}

        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
    </>
  );
}

export default App;