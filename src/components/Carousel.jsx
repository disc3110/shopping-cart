import ProductCard from './ProductCard';

const Carousel = ({ featuredProducts }) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex space-x-4 p-4 w-max">
                {featuredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;