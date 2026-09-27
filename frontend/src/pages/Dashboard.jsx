import { useEffect, useState } from "react";

export default function Dashboard() {
    const [products, setProducts] = useState(0);
    const [runs, setRuns] = useState(0);
    const [reports, setReports] = useState(0);

    useEffect(() => {
        async function loadDashboard() {
        const productsData = await fetch(
            "http://localhost:5000/products"
        ).then((res) => res.json());

        const runsData = await fetch(
            "http://localhost:5000/runs"
        ).then((res) => res.json());

        const reportsData = await fetch(
            "http://localhost:5000/daily-reports"
        ).then((res) => res.json());

        setProducts(productsData.length);
        setRuns(runsData.length);
        setReports(reportsData.length);
    }

        loadDashboard();
    }, []);

    return (
        <div>
        <div className="card">
        <h2>Products</h2>
        <p>{products}</p>
        </div>

        <div className="card">
        <h2>Runs</h2>
        <p>{runs}</p>
        </div>

        <div className="card">
        <h2>Daily Reports</h2>
        <p>{reports}</p>
        </div>
        </div>
    );
}