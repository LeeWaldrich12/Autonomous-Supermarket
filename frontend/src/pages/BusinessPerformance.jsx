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
    (sum, report) => sum + report.revenue,
    0
);

const totalCash =
    reports.length > 0 ? reports[reports.length - 1].closing_cash : 0;

const totalTransactions = reports.reduce(
    (sum, report) => sum + report.transactions,
    0
);

const totalUnitsSold = reports.reduce(
    (sum, report) => sum + report.units_sold,
    0
);

const averageCustomers =
    reports.length > 0 ? reports.reduce( (sum, report) => sum + report.customers,
        0
        ) / reports.length : 0;

const averageTransactionValue =
    totalTransactions > 0 ? totalRevenue / totalTransactions : 0;

const averageBasketSize =
    totalTransactions > 0 ? totalUnitsSold / totalTransactions : 0;

const totalCustomers = reports.reduce(
    (sum, report) => sum + report.customers,
    0
);

const weekdayReports = reports.filter(
    (_, index) => (index + 1) % 7 !== 6 && (index + 1) % 7 !== 0
);

const weekendReports = reports.filter(
    (_, index) => (index + 1) % 7 === 6 || (index + 1) % 7 === 0
);

const averageWeekdayCustomers =
    weekdayReports.length > 0 ? weekdayReports.reduce((sum, report) => sum + report.customers,
    0
    ) / weekdayReports.length : 0;

const averageWeekendCustomers =
    weekendReports.length > 0 ? weekendReports.reduce((sum, report) => sum + report.customers,
        0
    ) / weekendReports.length : 0;

    return (
        <div>
            <h2>Business Performance</h2>

            <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>

            <p>Closing Cash: ${totalCash.toFixed(2)}</p>

            <p>Total Days Simulated: {reports.length}</p>

            <p>Total Transactions: {totalTransactions}</p>

            <p>Total Customers: {totalCustomers}</p>

            <p> Average Weekday Customers:{" "} {averageWeekdayCustomers.toFixed(2)}</p>

            <p>Average Weekend Customers:{" "}{averageWeekendCustomers.toFixed(2)}</p>

            <p>Total Units Sold: {totalUnitsSold}</p>

            <p>
                Average Customers Per Day:{" "}
                {averageCustomers.toFixed(2)}
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