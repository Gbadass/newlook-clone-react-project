import { useState, createContext, useEffect } from "react";

export const Newlookcontext = createContext()

function NewlookProvider(props){

  const[cart, setCart] = useState([]);
  const localData = JSON.parse(localStorage.getItem("cartData"))
  useEffect(() => {
    if(localData) {
      setCart(localData)
    }
  }, [])

  return(
    <Newlookcontext.Provider value={{cart,setCart}}>
      {props.children}
      </Newlookcontext.Provider>
  )
}

export default NewlookProvider