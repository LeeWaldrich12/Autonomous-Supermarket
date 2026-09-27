export default async function Products() {
    const products = await fetch(
        "http://localhost:5000/products"
    ).then((res) => res.json());

    return `

        <div>
            <button id="back-button" class="back-button">
                Back
            </button>
        
            <h1>Products (${products.length})</h1>

        <ul>
            ${products.map((product) => `
            <li>
                ${product.product_id} -
                ${product.name}
            </li>
            `
        ).join("")}
        </ul>
    </div>
    `;
}