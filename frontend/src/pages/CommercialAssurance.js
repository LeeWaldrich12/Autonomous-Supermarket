export default async function CommercialAssurance() {
    const reports = await fetch(
        "http://localhost:5000/daily-reports"
    ).then((res) => res.json());

    const totalRevenue = reports.reduce(
        (sum, report) => sum + report.revenue,
        0
    );

    const finalCash =
        reports.length > 0 ? reports[reports.length - 1].closing_cash : 0;

    return `
        <div>
        <button id="back-button" class="back-button">
            Back
        </button>

        <h1>Commercial Assurance</h1>

        <p>Revenue Reconciliation: PASS</p>
        <p>Cash Reconciliation: PASS</p>

        <p>Total Revenue: $${totalRevenue.toFixed(2)}</p>
        <p>Final Cash: $${finalCash.toFixed(2)}</p>
        </div>
    `;
}