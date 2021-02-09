import React from 'react';


function Navbar() {
    return(
        
<nav className="navbar navbar-dark bg">
  <a className="navbar-home">Hermes</a>
    
    {/* <!-- Navbar links --> */}
  <div className='item-list'> 
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/m">Messenger</a>
      </li>    
    </ul>
  </div>  

</nav>

    );
}

export default Navbar;