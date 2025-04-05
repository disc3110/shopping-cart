import { useOutletContext } from "react-router-dom";
import Carousel from "../components/Carousel";
import CategorieSection from "../components/CategorySection";

const Home = () => {
    const { products, addToCart } = useOutletContext();
    const featuredProducts = products.filter((current) => {
        if (current.rating.rate >= 4){
            return current
        }
    })

    return(
        <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-3 ml-4">Featured Products</h2>
            <Carousel featuredProducts={featuredProducts} addToCart={addToCart}/>
            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6 ml-4">Categories</h2>
            <CategorieSection products={products} addToCart={addToCart}/>
        </>
    )
}


export default Home;