import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";

const Shop = () => {
    const { cart } = useOutletContext();

    return(
        <div className="p-4 m-5 rounded-sm bg-white">
            <h2 className="">Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cart.map((product) => (
                <CartItem product={product} />
                ))
            )}
        </div>
    )
}

export default Shop;