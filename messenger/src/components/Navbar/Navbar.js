import React from 'react';
import '../css/style.css';


function Navbar() {
    return(
        
<nav className="navbar navbar-dark bg">
  <a className="navbar-home">HERMES</a>
    
    {/* <!-- Navbar links --> */}
  <div className='item-list'> 
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/p">Profile</a>
      </li>    
      <li className="nav-item">
        <a className="nav-link" href="/l">Login</a>
      </li>   
    </ul>
  </div>  
  

</nav>

    );
}

export default Navbar;