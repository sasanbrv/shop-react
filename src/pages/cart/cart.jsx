import { useContext } from "react";
import { Products } from "../../data/Products";
import { ShopContext } from "../../context/sohpContext";
import Product from "../shop/Product";


const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    return ( <>
    <h1>your cart items</h1>
    <div className="row">
        {Products.map((p)=> {
            if( cartItems.some((i) => i.id === p.id && i.count > 0 ))
            return <Product data={p}></Product>
            else return <></>
        })}
    </div>
    </> );
}
 
export default Cart;<>
</>