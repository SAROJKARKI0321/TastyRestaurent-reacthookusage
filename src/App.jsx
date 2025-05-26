import { useState } from 'react'

import './App.css'
import Home from './PAGES/Home'

import Cart from './PAGES/Cart'
import Favs from './PAGES/Favs'
import Contact from './PAGES/Contact'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Menu from './PAGES/Menu'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
  
    <Route path='/' element={<Home/>}/>
    
       <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favs />} />
    </Routes>
    
    </BrowserRouter>
  );

}

export default App;
