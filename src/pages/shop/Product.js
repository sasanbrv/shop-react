import { useContext} from "react";
import { ShopContext } from "../../context/sohpContext";

const Product = (props)=>{
    const {id , productName , productImage , price} = props.data

    const {cartItems , addToCart , removeFromCart} = useContext(ShopContext)

    const isInCart = cartItems?.some((item)=> item.id === id)
    return(
        <>
        <div className="col-3 text-center border border-dark border-2 p-0">
            <img src={productImage} className="w-100" alt=""/>
            <div className="bg-dark-subtle">
                <h5>{productName}</h5>
                <p>price: {price}$</p>
                <button className="btn btn-info btn-sm" onClick={()=>addToCart(id)}>+</button>
                <span className="mx-2">{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
                {isInCart &&
                <button className="btn btn-info btn-sm" onClick={()=>removeFromCart(id)}>-</button>}
            </div>
        </div>
        </>
    )
}
export default Product;