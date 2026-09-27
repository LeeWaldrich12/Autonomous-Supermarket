export default async function BusinessPerformance() {
    const reports = await fetch(
        "http://localhost:5000/daily-reports"
    ).then((res) => res.json());

    const totalRevenue = reports.reduce(
        (sum, report) => sum + report.revenue,
        0
    );

    const totalCash =
        reports.length > 0 ? reports[reports.length - 1].closing_cash : 0;

    return `
        <div>
        <button id="back-button" class="back-button">
            Back
        </button>

        <h1>Business Performance</h1>

        <p>Total Revenue: $${totalRevenue.toFixed(2)}</p>
        <p>Closing Cash: $${totalCash.toFixed(2)}</p>
        <p>Total Reports: ${reports.length}</p>
        </div>
    `;
}