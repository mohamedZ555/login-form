
import './Nav.css';
import { Link } from "react-router-dom";
import React from 'react';
; 
function Nav() {

  return (
    <>
        <div className='navbar'>
          <ul className="Ul">
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Users">Users</Link></li>
                <li><Link to="/UserInfo">User Info</Link></li>
          </ul>
          </div>

          </>
  );
}

export default Nav;