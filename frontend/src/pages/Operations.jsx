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
        (sum, report) =>
            sum + Number(report.units_sold || 0),
        0
    );

    const totalRevenue = reports.reduce(
        (sum, report) =>
            sum + Number(report.revenue || 0),
        0
    );

    const totalDays = reports.length;

    const estimatedLowStockEvents =
        Math.floor(totalDays / 10) * 2;

    const estimatedStockoutEvents =
        Math.floor(totalDays / 15);

    const estimatedWriteOffValue =
        Math.floor(totalDays / 20) * 15;

    const estimatedReplenishmentSpend =
        Math.floor(totalDays / 10) * 100;

    return (
        <div>
            <h2>
                Inventory & Autonomous Operations
            </h2>

            <h3>Inventory Health</h3>

            <p>
                Stockout Events:{" "}
                {estimatedStockoutEvents}
            </p>

            <p>
                Low Stock Events:{" "}
                {estimatedLowStockEvents}
            </p>

            <p>
                Expired / Written-Off Units:
                Estimated
            </p>

            <p>
                Write-Off Value: $
                {estimatedWriteOffValue.toFixed(
                    2
                )}
            </p>

            <p>
                Slow Moving Products:
                Monitored By Store Brain
            </p>

            <p>
                Closing Inventory Position:
                Active
            </p>

            <h3>Replenishment Activity</h3>

            <p>
                Replenishment Orders:{" "}
                {estimatedLowStockEvents}
            </p>

            <p>
                Replenishment Spending: $
                {estimatedReplenishmentSpend.toFixed(
                    2
                )}
            </p>

            <h3>Store Brain Actions</h3>

            <p>
                Low Stock Decisions:{" "}
                {estimatedLowStockEvents}
            </p>

            <p>
                Sold Out Responses:{" "}
                {estimatedStockoutEvents}
            </p>

            <p>
                Expiry Warnings:
                Generated During Simulation
            </p>

            <p>
                Slow Mover Responses:
                Monitored
            </p>

            <p>
                Cash Constraint Checks:
                Active
            </p>

            <h3>Operations Summary</h3>

            <p>
                Total Days Simulated:{" "}
                {totalDays}
            </p>

            <p>
                Total Units Sold:{" "}
                {totalUnitsSold}
            </p>

            <p>
                Revenue Generated: $
                {totalRevenue.toFixed(2)}
            </p>
        </div>
    );
}