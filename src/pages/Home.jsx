import { useOutletContext } from "react-router-dom";

const Home = () => {
    const { products } = useOutletContext();

    return(
        <>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Home