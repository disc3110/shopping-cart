import ProductCard from "./ProductCard";

const CategorySection = ({ products }) => {
    // Group products by category
    const categories = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className="px-4 py-8">
            {Object.entries(categories).map(([category, items]) => (
                <div key={category}>
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
                        {items.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CategorySection;