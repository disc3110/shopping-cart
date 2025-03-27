import { useOutletContext } from "react-router-dom";
import Carousel from "../components/Carousel";
import CategorieSection from "../components/CategorySection";

const Home = () => {
    const { products } = useOutletContext();
    const featuredProducts = products.filter((current) => {
        if (current.rating.rate >= 4){
            return current
        }
    })

    console.log(featuredProducts)

    return(
        <>
            <Carousel />
            <CategorieSection />
        </>
    )
}

export default Home