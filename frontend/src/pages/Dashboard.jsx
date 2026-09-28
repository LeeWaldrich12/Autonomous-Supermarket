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

    async function runSimulation() {
        await fetch(
            "http://localhost:5000/simulation/run",
            {
                method: "POST",
            }
        );

        alert("Simulation Complete");

        window.location.reload();
    }

    return (
        <div>
            <h2>Dashboard</h2>

            <button onClick={runSimulation}>
                Run Simulation
            </button>

            <div>
                <h3>Products</h3>
                <p>{products}</p>
            </div>

            <div>
                <h3>Runs</h3>
                <p>{runs}</p>
            </div>

            <div>
                <h3>Daily Reports</h3>
                <p>{reports}</p>
            </div>
        </div>
    );
}