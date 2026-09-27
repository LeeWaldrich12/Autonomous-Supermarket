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
    (sum, report) => sum + report.revenue,
    0
    );

    const totalTransactions = reports.reduce(
    (sum, report) => sum + report.transactions,
    0
    );

    const totalUnitsSold = reports.reduce(
    (sum, report) => sum + report.units_sold,
    0
    );

    const closingCash =
    reports.length > 0 ? reports[reports.length - 1].closing_cash : 0;

    return (
    <div>
        <h2>Commercial Diagnosis</h2>

        <h3>Finding 1</h3>

        <p>
        <strong>Observation:</strong> The simulation generated
        total revenue of ${totalRevenue.toFixed(2)}.
        </p>

        <p>
        <strong>Evidence:</strong> Revenue was recorded across{" "}
        {reports.length} daily reports.
        </p>

        <p>
        <strong>Diagnosis:</strong> Customer demand was sufficient
        to generate continuous sales activity.
        </p>

        <p>
        <strong>Business Implication:</strong> The store is capable
        of generating ongoing commercial activity.
        </p>

        <p>
        <strong>Recommendation:</strong> Continue monitoring
        revenue trends and prioritise high-performing categories.
        </p>

        <h3>Finding 2</h3>

        <p>
        <strong>Observation:</strong> The simulation processed{" "}
        {totalTransactions} transactions and sold{" "}
        {totalUnitsSold} units.
        </p>

        <p>
        <strong>Evidence:</strong> Transactions and units sold were
        recorded throughout the simulation.
        </p>

        <p>
        <strong>Diagnosis:</strong> Customer purchasing behaviour
        created sustained product movement.
        </p>

        <p>
        <strong>Business Implication:</strong> Inventory turnover
        depends heavily on ongoing customer demand.
        </p>

        <p>
        <strong>Recommendation:</strong> Maintain inventory levels
        for frequently purchased products.
        </p>

        <h3>Finding 3</h3>

        <p>
        <strong>Observation:</strong> Closing operating cash reached
        ${closingCash.toFixed(2)}.
        </p>

        <p>
        <strong>Evidence:</strong> Daily reports recorded cash
        accumulation over time.
        </p>

        <p>
        <strong>Diagnosis:</strong> Sales revenue contributed to
        positive cash growth.
        </p>

        <p>
        <strong>Business Implication:</strong> Cash availability
        supports future replenishment decisions.
        </p>

        <p>
        <strong>Recommendation:</strong> Continue monitoring cash
        levels and replenishment spending to maintain liquidity.
        </p>
    </div>
    );
}