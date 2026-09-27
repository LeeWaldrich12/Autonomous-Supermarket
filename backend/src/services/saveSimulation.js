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
        cogs,
        gross_profit,
        average_transaction_value,
        average_basket_size,
        closing_cash
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
        runId,
        dayResult.day,
        dayResult.customerCount,
        dayResult.totalTransactions,
        dayResult.unitsSold,
        dayResult.revenue,
        dayResult.cogs,
        dayResult.grossProfit,
        dayResult.averageTransactionValue,
        dayResult.averageBasketSize,
        currentCash
        ]
    );
}

module.exports = { saveDailyReport };