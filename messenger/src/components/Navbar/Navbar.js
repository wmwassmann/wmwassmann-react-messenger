import React from 'react';


function Navbar() {
    return(
<nav className="navbar navbar-dark bg">
  <a className="navbar-brand" href="about">William Wassmann</a>
    
    {/* <!-- Navbar links --> */}
    
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/featured">RPG: Adventurer's Academy</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="navnoborder" href="/contact">Contact</a>
      </li>
     
    </ul>

</nav>

    );
}

export default Navbar;