import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';

const sampleMenu=[{
    id:1,name:"Pizza",price:"$10"},
     { id: 2, name: 'Burger', price: "$7" },
  { id: 3, name: 'Sushi', price: "$12" },
   { id: 4, name: "Pasta", price: "$9" },
  { id: 5, name: "Salad", price: "$6" }
];
function Menu() {
    const {addToCart, addToFavs}=useContext(AppContext);

  return (
    
    <div>
        <h2>Menu</h2>
        <div className='menu-container'>
        {sampleMenu.map((item)=>(
            <div className='card' key={item.id}>
                <h3>{item.name}</h3>
                <p >{item.price}</p>
                <button className='action' onClick={()=>addToCart(item)}>Add to Cart</button>
                 <button className='action' onClick={() => addToFavs(item)}>Add to Favs</button>
                </div>
                

        ))}
        </div>


    </div>
    
    
  );
};

export default Menu;