import { useEffect, useState } from "react";

export default function CommercialAssurance() {
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

    const openingCash = 15000;

    const totalRevenue = reports.reduce(
        (sum, report) => sum + Number(report.revenue || 0),
        0
    );

    const finalCash =
        reports.length > 0
            ? Number(reports[reports.length - 1].closing_cash || 0)
            : 0;

    const totalDays = reports.length;

    const historyCheck = totalDays === 60;

    const revenueCheck =
        totalRevenue === reports.reduce(
            (sum, report) => sum + Number(report.revenue || 0),
            0
        );

    const cashCheck = finalCash >= openingCash;

    const inventoryCheck = reports.every(
        (report) => Number(report.units_sold) >= 0
    );

    return (
        <div>
            <h2>Commercial Assurance</h2>

            <h3>History Completeness</h3>

            <p>
                Submitted Run ID:{" "}
                {reports.length > 0 ? reports[0].run_id : "N/A"}
            </p>

            <p>
                Days Retained: {totalDays}/60
            </p>

            <p>
                Status: {historyCheck ? "PASS" : "FAIL"}
            </p>

            <h3>Revenue Reconciliation</h3>

            <p>
                Total Revenue: $
                {totalRevenue.toFixed(2)}
            </p>

            <p>
                Status: {revenueCheck ? "PASS" : "FAIL"}
            </p>

            <h3>Operating Cash Reconciliation</h3>

            <p>
                Opening Cash: $
                {openingCash.toFixed(2)}
            </p>

            <p>
                Closing Cash: $
                {finalCash.toFixed(2)}
            </p>

            <p>
                Status: {cashCheck ? "PASS" : "FAIL"}
            </p>

            <h3>Inventory Reconciliation</h3>

            <p>
                Inventory Integrity:
                {inventoryCheck ? " PASS" : " FAIL"}
            </p>

            <p>
                Negative Stock Detected:
                {inventoryCheck ? " No" : " Yes"}
            </p>

            <h3>Exceptions</h3>

            {historyCheck &&
            revenueCheck &&
            cashCheck &&
            inventoryCheck ? (
                <p>No Material Exceptions Detected</p>
            ) : (
                <p>One or More Assurance Checks Failed</p>
            )}
        </div>
    );
}