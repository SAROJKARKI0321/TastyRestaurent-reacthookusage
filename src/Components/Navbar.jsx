import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <ul className='nav-list'>
       <li><Link to="/">Home</Link></li> 
        <li><Link to="/menu">Menu</Link></li> 
        <li><Link to="/cart">Cart</Link></li> 
      <li><Link to="/favs">Favorites</Link></li> 
      <li><Link to="/contact">Contact</Link></li> 

</ul>
    </nav>
    </>
  );
}

export default Navbar;