import { createContext , useState } from "react";

export const  ShopContext = createContext(null)

export const ShopContextProvider =(props)=>{
    const [cartItems , setCatItems] = useState([])

    const addToCart=(itemId)=>{
        if (!cartItems?.find((item)=> item.id ===itemId))
        setCatItems([...cartItems , {id: itemId , count : 1}])
        else 
        setCatItems(cartItems.map((item)=>{
            if(item.id === itemId)
                return{...item , count : item.count +1}
            else return item
        }))
    }


    const removeFromCart =(itemId)=> {
        setCatItems(cartItems.map((i) =>{
            if(i.id === itemId)
            return {...i , count : i.count === 0 ? 0 : i.count - 1}
            else return i 
        }))
    }

    const contextValue ={cartItems , removeFromCart , addToCart}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}