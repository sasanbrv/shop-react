import { Products } from "../../data/Products";
import Product from "./Product";


const Shop = () => {
    return ( <>
        <div className="row">
            {Products.map((p)=><Product key={p.id} data={p}/>)}
        </div>
    </>);
}
 
export default Shop;