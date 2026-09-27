export default async function DailyReports() {
    const reports = await fetch(
        "http://localhost:5000/daily-reports"
    ).then((res) => res.json());

    return `
        <div>

        <button id="back-button" class="back-button">
            Back
        </button>

        <h1>Daily Reports (${reports.length})</h1>

        <ul>
            ${reports.slice(0, 20).map((report) => `
                <li>
                    Day ${report.day} | Revenue: $${report.revenue} | Cash: $${report.closing_cash}
                </li>
                `
            ).join("")}
        </ul>
        </div>
    `;
}