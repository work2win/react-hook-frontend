import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';


const AppNavbar = () => {

  

  return (
    <nav class="navbar">
      <div class="nav-container">
      <ul class="nav-items">
                <li><a href="../../../aboutus.html">AboutUs</a></li>
                <li><a href="../../../photo.html">Photos</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>                
                <li><a href="../../../aboutus.html">Contact</a></li> 
                <li><a href="#">Menu</a></li>
                <li><a href="https://www.facebook.com/alleppeyresidency%20/">@facebook</a></li>
                <li><a href="../../../aboutus.html">Contact</a></li> 
                <li><Link to="/rooms">Rooms Available</Link></li>    
                <li><Link to="/login">Login</Link></li>    
      </ul>     
      </div>
    </nav>
  );
};

export default AppNavbar;