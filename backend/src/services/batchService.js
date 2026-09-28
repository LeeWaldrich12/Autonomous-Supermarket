const db = require("../database");

function receiveInventory(
    runId,
    day,
    productId,
    quantity,
    shelfLifeDays
) {
    db.run(
        `
        INSERT INTO inventory_batches (
            run_id,
            product_id,
            quantity,
            received_day,
            expiry_day
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            runId,
            productId,
            quantity,
            day,
            day + shelfLifeDays,
        ]
    );
}

function removeExpiredInventory(
    currentDay,
    callback
) {
    db.run(
        `
        DELETE FROM inventory_batches
        WHERE expiry_day <= ?
        `,
        [currentDay],
        callback
    );
}

module.exports = {
    receiveInventory,
    removeExpiredInventory,
};