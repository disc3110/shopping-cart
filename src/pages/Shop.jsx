import { useOutletContext } from "react-router-dom";

const Shop = () => {
    const { cart } = useOutletContext();

    return(
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cart.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                </div>
                ))
            )}
        </div>
    )
}

export default Shop;