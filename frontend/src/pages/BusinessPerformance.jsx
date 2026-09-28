import { useEffect, useState } from "react";

export default function BusinessPerformance() {
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

    const totalCash =
        reports.length > 0
            ? Number(reports[reports.length - 1].closing_cash || 0)
            : 0;

    const totalTransactions = reports.reduce(
        (sum, report) => sum + Number(report.transactions || 0),
        0
    );

    const totalUnitsSold = reports.reduce(
        (sum, report) => sum + Number(report.units_sold || 0),
        0
    );

    const totalCustomers = reports.reduce(
        (sum, report) => sum + Number(report.customers || 0),
        0
    );

    const totalCogs = reports.reduce(
        (sum, report) => sum + Number(report.cogs || 0),
        0
    );

    const totalGrossProfit = reports.reduce(
        (sum, report) => sum + Number(report.gross_profit || 0),
        0
    );

    const averageCustomers =
        reports.length > 0
            ? totalCustomers / reports.length
            : 0;

    const averageTransactionValue =
        totalTransactions > 0
            ? totalRevenue / totalTransactions
            : 0;

    const averageBasketSize =
        totalTransactions > 0
            ? totalUnitsSold / totalTransactions
            : 0;

    const weekdayReports = reports.filter(
        (_, index) =>
            (index + 1) % 7 !== 6 &&
            (index + 1) % 7 !== 0
    );

    const weekendReports = reports.filter(
        (_, index) =>
            (index + 1) % 7 === 6 ||
            (index + 1) % 7 === 0
    );

    const averageWeekdayCustomers =
        weekdayReports.length > 0
            ? weekdayReports.reduce(
                (sum, report) =>
                    sum + Number(report.customers || 0),
                0
            ) / weekdayReports.length
            : 0;

    const averageWeekendCustomers =
        weekendReports.length > 0
            ? weekendReports.reduce(
                (sum, report) =>
                    sum + Number(report.customers || 0),
                0
            ) / weekendReports.length
            : 0;

    return (
        <div
            style ={{
                height: "100vh",
                padding: "20px",
            }}>

            <h2>Business Performance</h2>

            <h3>Store Performance</h3>

            <p>Total Customers: {totalCustomers}</p>

            <p>Total Transactions: {totalTransactions}</p>

            <p>Total Units Sold: {totalUnitsSold}</p>

            <p>Sales Revenue: ${totalRevenue.toFixed(2)}</p>

            <p>COGS: ${totalCogs.toFixed(2)}</p>

            <p>Gross Profit: ${totalGrossProfit.toFixed(2)}</p>

            <p>Expiry / Write-Off Value: $0.00</p>

            <p>Closing Operating Cash: ${totalCash.toFixed(2)}</p>

            <p>Closing Inventory Value: $0.00</p>

            <h3>Shopper & Basket Performance</h3>

            <p>
                Average Customers Per Day:{" "}
                {averageCustomers.toFixed(2)}
            </p>

            <p>
                Average Weekday Customers:{" "}
                {averageWeekdayCustomers.toFixed(2)}
            </p>

            <p>
                Average Weekend Customers:{" "}
                {averageWeekendCustomers.toFixed(2)}
            </p>

            <p>
                Average Transaction Value: $
                {averageTransactionValue.toFixed(2)}
            </p>

            <p>
                Average Basket Size:{" "}
                {averageBasketSize.toFixed(2)}
            </p>
        </div>
    );
}