import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './main/login/login';
import Nav from './main/nav/nav'
import Users from './main/users/users';
import UserInfo from './main/userinfo/userInfo'
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/UserInfo" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
