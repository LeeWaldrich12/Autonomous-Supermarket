const db = require("../database");

function saveDailyReport(runId, dayResult, currentCash) {
    db.run(
    `
    INSERT INTO daily_reports (
        run_id,
        day,
        customers,
        transactions,
        units_sold,
        revenue,
        closing_cash
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
        runId,
        dayResult.day,
        dayResult.customerCount,
        dayResult.totalTransactions,
        dayResult.unitsSold,
        dayResult.revenue,
        currentCash
    ]
    );
}

module.exports = { saveDailyReport };