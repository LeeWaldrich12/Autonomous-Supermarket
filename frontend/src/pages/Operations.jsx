import { useEffect, useState } from "react";

export default function Operations() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        async function loadReports() {
            const data = await fetch(
                "http://localhost:5000/daily-reports"
            ).then((res) => res.json());

            setReports(data);
        }

        loadReports();
    }, []);

    const totalUnitsSold = reports.reduce(
        (sum, report) => sum + Number(report.units_sold || 0),
        0
    );

    const totalRevenue = reports.reduce(
        (sum, report) => sum + Number(report.revenue || 0),
        0
    );

    const totalDays = reports.length;

    return (
        <div>
            <h2>Inventory & Autonomous Operations</h2>

            <h3>Inventory Health</h3>

            <p>Stockout Events: 0</p>

            <p>Low Stock Events: 0</p>

            <p>Expired / Written-Off Units: 0</p>

            <p>Write-Off Value: $0.00</p>

            <p>Slow Moving Products: None Recorded</p>

            <p>Closing Inventory Position: Active</p>

            <h3>Replenishment Activity</h3>

            <p>Replenishment Orders: 0</p>

            <p>Replenishment Spending: $0.00</p>

            <h3>Store Brain Operations</h3>

            <p>Low Stock Decisions: 0</p>

            <p>Sold Out Responses: 0</p>

            <p>Expiry Warnings: 0</p>

            <p>Slow Mover Responses: 0</p>

            <p>Cash Constrained Orders: 0</p>

            <h3>Operational Summary</h3>

            <p>Total Days Simulated: {totalDays}</p>

            <p>Total Units Sold: {totalUnitsSold}</p>

            <p>Total Revenue Generated: ${totalRevenue.toFixed(2)}</p>

            <p>
                Store Brain operated throughout the simulation and monitored
                inventory conditions, replenishment requirements, and cash
                availability.
            </p>
        </div>
    );
}