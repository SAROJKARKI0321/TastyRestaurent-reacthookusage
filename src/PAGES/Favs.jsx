import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Favs = () => {
    const {favs,removeFromFavs}=useContext(AppContext);
  return (
    <div>
        <h2>Your Favs.</h2>
        {favs.length===0?(
            <h2>No item on Favs.</h2>):(
                <ul>
                    {favs.map((fav)=>(
                        <li key="fav.id">{fav.name}
                        <button
                         onClick={()=>removeFromFavs(fav.id)}>
                            Remove
                            </button>
                            </li>
                    ))}
                </ul>

            )
        }


    </div>
  )
  
};

export default Favs;
