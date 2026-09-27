export default function ModelDeclaration() {
    return (
        <div>
            <h2>Model Declaration</h2>

            <h3>Customer Activity</h3>
            <p>
                Customers are generated daily. Weekdays produce between 100 and 150 customers. Weekends produce between 150 and 200 customers.
            </p>

            <h3>Customer Types</h3>
            <ul>
                <li>Student</li>
                <li>Office Worker</li>
                <li>Resident</li>
            </ul>

            <h3>Shopping Behaviour</h3>
            <p>
                Students prefer drinks, snacks and ready-to-eat meals. Office workers prefer drinks, dairy and ready-to-eat meals. Residents prefer frozen foods, vegetables, dairy, canned goods, household and personal care items.
            </p>

            <h3>Demand Generation</h3>
            <p>
                Basket size is generated according to customer type. Different customer types purchase different categories.
            </p>

            <h3>Perishable Products</h3>
            <p>
                Frozen products, dairy products, vegetables and ready-to-eat meals are treated as perishable items.
            </p>

            <h3>Store Brain Logic</h3>
            <ul>
                <li>Low Stock: 20 units or less</li>
                <li>Sold Out: 0 units remaining</li>
                <li>Expiry Warning: 3 days or less remaining</li>
                <li>Slow Moving: High stock with low sales</li>
            </ul>

            <h3>Replenishment</h3>
            <p>
                Replenishment quantities are calculated automatically. Orders are only approved when sufficient cash is available.
            </p>
        </div>
    );
}