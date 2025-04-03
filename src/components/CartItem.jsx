const CartItem = ({product}) => {
    return(
        <div className="bg-lime-200 my-4 rounded-lg shadow-md p-4 flex flex-row items-center h-[180px] flex-shrink-0">
            <img
                src={product.image}
                alt={product.title}
                className="w-1/4 h-full object-cover rounded-md mb-2"
            />
            <h3 className="text-sm font-semibold h-10 overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {product.title}
            </h3>
            <p className="text-gray-600 text-sm"> {product.quantity} </p>
            <p className="text-gray-600 text-sm ">${product.price}</p>
        </div>
    )
}

export default CartItem;