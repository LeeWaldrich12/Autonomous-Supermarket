import { useEffect, useState } from "react";

export default function CommercialDiagnosis() {
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

    const totalRevenue = reports.reduce(
        (sum, report) => sum + Number(report.revenue || 0),
        0
    );

    const totalTransactions = reports.reduce(
        (sum, report) => sum + Number(report.transactions || 0),
        0
    );

    const totalUnitsSold = reports.reduce(
        (sum, report) => sum + Number(report.units_sold || 0),
        0
    );

    const closingCash =
        reports.length > 0
            ? Number(reports[reports.length - 1].closing_cash || 0)
            : 0;

    return (
        <div
            style={{
                height: "100vh",
                padding : "20px",
            }}>
            <h2>Commercial Diagnosis & Recommendations</h2>

            <h3>Finding 1</h3>

            <p>
                <strong>Observation:</strong> The store generated
                ${totalRevenue.toFixed(2)} in revenue.
            </p>

            <p>
                <strong>Evidence:</strong> Revenue was recorded across
                {reports.length} simulated days.
            </p>

            <p>
                <strong>Diagnosis:</strong> Customer demand was strong enough
                to produce continuous sales activity throughout the simulation.
            </p>

            <p>
                <strong>Business Implication:</strong> The supermarket model
                demonstrates commercial viability under the simulated demand
                conditions.
            </p>

            <p>
                <strong>Recommendation:</strong> Continue monitoring
                high-demand categories and allocate replenishment funding to
                products generating the greatest sales volume.
            </p>

            <h3>Finding 2</h3>

            <p>
                <strong>Observation:</strong> The simulation processed
                {totalTransactions} transactions and sold
                {totalUnitsSold} units.
            </p>

            <p>
                <strong>Evidence:</strong> Daily reports consistently recorded
                customer purchases and inventory movement.
            </p>

            <p>
                <strong>Diagnosis:</strong> Customer shopping behaviour created
                steady inventory turnover during the simulation period.
            </p>

            <p>
                <strong>Business Implication:</strong> Fast-moving products are
                likely to require more frequent replenishment than slower
                selling items.
            </p>

            <p>
                <strong>Recommendation:</strong> Review inventory policies and
                prioritise replenishment for products with the highest demand.
            </p>

            <h3>Finding 3 (Limitation)</h3>

            <p>
                <strong>Observation:</strong> The simulation is based on
                generated customer behaviour rather than real supermarket data.
            </p>

            <p>
                <strong>Evidence:</strong> Customer volumes, shopping missions,
                category preferences and purchasing behaviour are defined by
                the simulation model.
            </p>

            <p>
                <strong>Diagnosis:</strong> Commercial outcomes depend on model
                assumptions and may differ from actual customer behaviour in a
                real Melbourne CBD supermarket.
            </p>

            <p>
                <strong>Business Implication:</strong> Revenue, inventory
                turnover and cash outcomes should be treated as prototype
                estimates rather than forecasts.
            </p>

            <p>
                <strong>Recommendation:</strong> If the project progresses,
                collect real operating data and recalibrate the customer and
                demand model before making business decisions.
            </p>
        </div>
    );
}