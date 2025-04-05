import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        addToCart(product);
        setClicked(true);
        setTimeout(() => setClicked(false), 200); // reset after 200ms
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-[300px] w-[200px] flex-shrink-0">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-1/2 object-cover rounded-md mb-2"
            />
            <h3 className="text-sm font-semibold text-center h-10 overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {product.title}
            </h3>
            <p className="text-gray-600 text-sm">${product.price}</p>
            <button
                className={`mt-auto px-2 py-2 text-sm rounded w-full overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 transform active:scale-95 hover:bg-blue-600 ${
                    clicked ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={handleClick}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;