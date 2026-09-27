export default async function Operations() {
    const reports = await fetch(
        "http://localhost:5000/daily-reports"
    ).then((res) => res.json());

    const highestRevenueDay = reports.reduce(
        (max, report) =>
        report.revenue > max.revenue ? report : max,
        reports[0]
    );

    return `
        <div>
        <button id="back-button" class="back-button">
            Back
        </button>

        <h1>Inventory & Operations</h1>

        <p>
            Highest Revenue Day: Day ${highestRevenueDay.day}
        </p>

        <p>
            Revenue: $${highestRevenueDay.revenue}
        </p>

        <p>
            Closing Cash: $${highestRevenueDay.closing_cash}
        </p>
        </div>
    `;
}