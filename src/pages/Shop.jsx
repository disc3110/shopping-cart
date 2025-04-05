import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";

const Shop = () => {
    const { cart, updateQuantity } = useOutletContext();
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="p-4 m-5 rounded-sm bg-white">
            <h2 className="text-lg font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} updateQuantity={updateQuantity} />
                    ))}
                    <div className="mt-6 text-right text-lg font-semibold border-t pt-4">
                        Total: ${cartTotal}
                    </div>
                    <div className="mt-4 text-right">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Shop;