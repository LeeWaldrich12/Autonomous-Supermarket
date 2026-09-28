const db = require("../database");

function saveTransaction(
    runId,
    day,
    customerType,
    total
) {
    db.run(
        `
        INSERT INTO transactions (
            run_id,
            day,
            customer_type,
            total_amount
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            runId,
            day,
            customerType,
            total,
        ]
    );
}

function saveTransactionItem(
    transactionId,
    productId,
    quantity,
    unitPrice
) {
    db.run(
        `
        INSERT INTO transaction_items (
            transaction_id,
            product_id,
            quantity,
            unit_price
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            transactionId,
            productId,
            quantity,
            unitPrice,
        ]
    );
}

function saveStoreBrainEvent(
    runId,
    day,
    productId,
    eventType,
    actionTaken
) {
    db.run(
        `
        INSERT INTO store_brain_events (
            run_id,
            day,
            product_id,
            event_type,
            action_taken
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            runId,
            day,
            productId,
            eventType,
            actionTaken,
        ]
    );
}

function saveReplenishment(
    runId,
    day,
    productId,
    quantity,
    cost
) {
    db.run(
        `
        INSERT INTO replenishments (
            run_id,
            day,
            product_id,
            quantity,
            cost
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            runId,
            day,
            productId,
            quantity,
            cost,
        ]
    );
}

module.exports = {
    saveTransaction,
    saveTransactionItem,
    saveStoreBrainEvent,
    saveReplenishment,
};