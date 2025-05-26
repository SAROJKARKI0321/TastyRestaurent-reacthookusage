import React from 'react'
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='home-container'>
      <div className='overlay'>
        <div className='home-buttons'>
          
        <Link to="/menu" className='home-btn'><button>Menu</button></Link>
         <Link to="/contact" > <button className='home-btn'>Contact Us</button></Link>
    </div>
    </div>
    </div>
    

    </>
  );
}

export default Home