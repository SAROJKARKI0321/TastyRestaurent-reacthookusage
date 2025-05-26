import React,{useState,createContext, Children} from "react";
export const AppContext= createContext();

export const AppProvider= ({children})=>{
const[cartItems,setCartItems]=useState([]);
const[favs,setFavs]=useState([]);


const addToCart=(item)=>{
    setCartItems((prev)=>[...prev,item]);
}
const addToFavs=(item)=>{
    if(!favs.some((fav)=>fav.id===item.id)){
        setFavs((prev)=>[...prev,item]);
    }
};

const removeFromCart=(id)=>{
    setCartItems((prev)=>
        prev.filter((item)=> item.id !==id));
    
};
const removeFromFavs = (id) => {
    setFavs((prev) => prev.filter((item) => item.id !== id));
  };

  return(
    <AppContext.Provider
                        value={{cartItems,favs,addToCart,addToFavs,removeFromCart,removeFromFavs}}>
                            {children}
                        </AppContext.Provider>
  )


};
export default AppProvider;