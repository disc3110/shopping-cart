const CartItem = ({ product, updateQuantity }) => {
    const total = (product.price * product.quantity).toFixed(2);

    return (
        <div className="bg-white my-4 rounded-lg shadow-md p-4 flex items-center space-x-4 justify-between">
            <div className="w-20 h-20 bg-gray-100 flex-shrink-0 rounded overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-md font-semibold mb-1">{product.title}</h3>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white">
                        <button
                            className="text-gray-700 px-2"
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        >
                            &#8722;
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                            className="text-gray-700 px-2"
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        >
                            &#43;
                        </button>
                    </div>
                    <p className="text-gray-700 text-sm">Price: ${product.price}</p>
                </div>
            </div>
            <div className="text-gray-900 font-bold text-md w-24 text-right">
                ${total}
            </div>
        </div>
    );
};

export default CartItem;