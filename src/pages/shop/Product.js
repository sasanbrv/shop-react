const Product = (props)=>{
    const {id , productName , productImage , price} = props.data
    return(
        <>
        <div className="col-3 text-center border border-dark border-2 p-0">
            <img src={productImage} className="w-100" alt=""/>
            <div className="bg-dark-subtle">
                <h5>{productName}</h5>
                <p>price: {price}$</p>
                <button className="btn btn-info btn-sm">+</button>
                <span className="mx-2">0</span>
                <button className="btn btn-info btn-sm">-</button>
            </div>
        </div>
        </>
    )
}
export default Product;