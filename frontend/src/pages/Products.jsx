import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
        const data = await fetch(
            "http://localhost:5000/products"
        ).then((res) => res.json());

        setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <div>
        <h2>Products ({products.length})</h2>

        <ul>
            {products.map((product) => (
            <li key={product.product_id}>
                {product.product_id} - {product.name}
            </li>
            ))}
        </ul>
        </div>
    );
}